import React, { useEffect, useState } from 'react'
import * as S from './Home.style'

import TopNavBar from '../../components/TopNav/TopNavBar'
import Carousel from '../../components/Carousel/Carousel'
import CardProduct from '../../components/Product/CardProduct'
import HomeCategorie from '../../components/Categorie/HomeCategorie'
import PageNationBtn from '../../components/PageNationBtn/PageNationBtn'
import Footer from '../../components/Footer/Footer'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { getAllProducts } from '../../api/ProductApi'
import { userTypeState } from '../../atoms/Atoms'

export default function Home() {
  const navigate = useNavigate()
  const userType = useRecoilValue(userTypeState)
  const [allProducts, setAllProducts] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [allPages, setAllPages] = useState(1)

  useEffect(() => {
    getAllProducts(pageNum).then(data => {
      setAllProducts(data.results)
      setAllPages(
        data.count % 15 === 0
          ? Math.floor(data.count / 15)
          : Math.floor(data.count / 15) + 1
      )
    })
  }, [pageNum])

  return (
    <>
      <TopNavBar userType={userType} />
      <Carousel />
      <HomeCategorie allPages={allPages} />
      <S.ProductContainer>
        <S.H1>New Arrivals</S.H1>
        <S.ProductLists>
          {allProducts.map(product => (
            <CardProduct
              key={product.product_id}
              product={product}
              onClick={() => {
                navigate(`/products/${product.product_id}`)
              }}
              userType={userType}
            />
          ))}
        </S.ProductLists>
      </S.ProductContainer>
      <PageNationBtn
        pageNum={pageNum}
        setPageNum={setPageNum}
        allPages={allPages}
        setAllPages={setAllPages}
      />
      <Footer />
    </>
  )
}
