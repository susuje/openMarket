import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import * as S from './Category.style'
import * as SC from '../Home/Home.style'

import { getAllProducts } from '../../api/ProductApi'
import { useRecoilValue } from 'recoil'
import { userTypeState } from '../../atoms/Atoms'

import TopNavBar from '../../components/TopNav/TopNavBar'
import CardProduct from '../../components/Product/CardProduct'
import Footer from '../../components/Footer/Footer'
import PageNationBtn from '../../components/PageNationBtn/PageNationBtn'

export default function Category() {
  const location = useLocation()
  const { allPages } = location.state
  const userType = useRecoilValue(userTypeState)
  const navigate = useNavigate()
  const [pageNum, setPageNum] = useState(1)
  const [allProducts, setAllProducts] = useState([])
  const [products15, setProducts15] = useState([]) //한페이지당 15개만 보여줘야함
  const [pageBtn, setPageBtn] = useState(1)

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
      //console.log(data) //15개 상품 array
      //console.log(allPages) //home화면에서 가져온 allPages
      data.results.forEach(x => {
        try {
          if (
            JSON.parse(x.product_info).length === 2 &&
            JSON.parse(x.product_info)[0][0] === categories[category]
          ) {
            // console.log(JSON.parse(x.product_info)[0][0]) // [ ['문구'], ['귀여운인형임니다'] ]
            setAllProducts(prev => [...prev, x])
          }
        } catch (e) {
          if (category === 'Etc') {
            setAllProducts(prev => [...prev, x])
          }
        }
      })

      if (pageNum < allPages) {
        //이코드짠이유=>위에 getAllProducts(pageNum) pageNum이 allPage가 되면 중단시켜야한다.
        setPageNum(pageNum => pageNum + 1)
      }
    })
  }, [pageNum])

  useEffect(() => {
    //페이지당 15개만 보여줘야하므로 products15를 설정하는 useEffect
    window.scrollTo(0, 0)
    const firstIndex = 15 * (pageBtn - 1)

    const arr15 = []
    if (allProducts.length > firstIndex) {
      for (
        let i = firstIndex;
        i < Math.min(firstIndex + 15, allProducts.length); //4개만 있을수도있으니까
        i++
      ) {
        //15번반복
        arr15.push(allProducts[i])
      }
      setProducts15(arr15)
    }
  }, [pageBtn, allProducts])

  return (
    <>
      <TopNavBar />

      <S.Banner>
        <S.H1>{category}</S.H1>
      </S.Banner>
      <SC.ProductContainer>
        <SC.ProductLists>
          {products15.map(product => (
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
      <PageNationBtn
        categoriesProductsLength={allProducts.length}
        allPages={
          allProducts.length % 15 === 0
            ? allProducts.length / 15
            : Math.floor(allProducts.length / 15) + 1
        }
        pageNum={pageBtn}
        setPageNum={setPageBtn}
      />
      <Footer />
    </>
  )
}

// {products15.map(product => (
//   <CardProduct
//     key={product.product_id}
//     product={product}
//     onClick={() => {
//       navigate(`/products/${product.product_id}`)
//     }}
//     userType={userType}
//   />
// ))}
