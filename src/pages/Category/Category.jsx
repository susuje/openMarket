import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import * as S from './Category.style'
import * as SC from '../Home/Home.style'

import { getAllProducts } from '../../api/ProductApi'
import { useRecoilValue } from 'recoil'
import { userTypeState } from '../../atoms/Atoms'
import TopNavBar from '../../components/TopNav/TopNavBar'
import CardProduct from '../../components/Product/CardProduct'

export default function Category() {
  const userType = useRecoilValue(userTypeState)
  const navigate = useNavigate()
  const [pageNum, setPageNum] = useState(1)
  const [allProducts, setAllProducts] = useState([])
  const { category } = useParams() //Stationery
  const categories = {
    Stationery: '문구',
    Beauty: '화장품',
    Furniture: '가구',
    Home: '홈데코',
    Accessories: '악세사리',
    Fashion: '패션',
    Shoes: '신발',
    Music: '음악',
  }
  useEffect(() => {
    getAllProducts(pageNum).then(data => {
      console.log(data.results)
      data.results.map(x => {
        try {
          if (
            JSON.parse(x.product_info).length === 2 &&
            JSON.parse(x.product_info)[0][0] === categories[category]
          ) {
            // console.log(JSON.parse(x.product_info)[0][0]) // [ ['문구'], ['귀여운인형임니다'] ]
            setAllProducts(prev => [...prev, x])
          }
        } catch (e) {
          return null
        }
      })
    })
  }, [])

  return (
    <>
      <TopNavBar />

      <S.Banner>
        <S.H1>{category}</S.H1>
      </S.Banner>
      <SC.ProductContainer>
        <SC.ProductLists>
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
        </SC.ProductLists>
      </SC.ProductContainer>
    </>
  )
}
