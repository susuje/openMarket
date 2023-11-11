import React, { useEffect, useState } from 'react'
import * as S from './Search.style'

import TopNavBar from '../../components/TopNav/TopNavBar'
import ProductCard from '../../components/Search/ProductCard'
import Footer from '../../components/Footer/Footer.jsx'

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getSearchedProduct } from '../../api/ProductApi.js'

export default function Search() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const location = useLocation()
  const { searchTxt } = location.state

  useEffect(() => {
    getSearchedProduct(searchTxt).then(data => {
      console.log(data)
      setProducts(data.results)
    })
  }, [searchTxt])

  return (
    <>
      <TopNavBar />
      <S.Container>
        {products.length !== 0 ? (
          <S.H1>
            <span>'{searchTxt}' </span>에 대한 검색 결과입니다.
          </S.H1>
        ) : null}
        {products.length !== 0 ? (
          products.map(product => (
            <ProductCard
              product={product}
              onClick={() => {
                navigate(`/products/${product.product_id}`)
              }}
            />
          ))
        ) : (
          <S.H2>
            <span>'{searchTxt}' </span> 검색결과가 없습니다.
          </S.H2>
        )}
      </S.Container>
      <Footer />
    </>
  )
}
