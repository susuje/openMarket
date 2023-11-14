import React, { useEffect, useState } from 'react'
import * as S from './SellerCenter.style'

import { useNavigate } from 'react-router-dom'
import { getSellerProducts } from '../../api/ProductApi'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userTokenState, product_id } from '../../atoms/Atoms'

import productUploadBtn from '../../assets/icon/productUploadBtn.svg'
import CenterTopNav from '../../components/TopNav/CenterTopNav'
import MenuTab from '../../components/SellerCenter/MenuTab'
import ProductListBox from '../../components/SellerCenter/ProductListBox'
import Footer from '../../components/Footer/Footer'

export default function SellerCenter() {
  //상품업로드 버튼누르면 product_id 빈문자열되게
  const token = useRecoilValue(userTokenState)
  const setProductId = useSetRecoilState(product_id)
  const [productList, setProductList] = useState([])

  const fetchSellerList = () => {
    getSellerProducts(token).then(data => {
      setProductList(data.results)
    })
    console.log('항')
  }

  useEffect(() => {
    fetchSellerList()
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <CenterTopNav />
      <S.Wrapper>
        <S.Container>
          <S.Flex>
            <S.H1>
              대시보드 <span>{productList[0]?.store_name || ''}</span>
            </S.H1>
            <button
              onClick={() => {
                setProductId('')
                navigate('/productUpload')
              }}
            >
              <img src={productUploadBtn} alt="상품 업로드 버튼" />
            </button>
          </S.Flex>
          <S.FlexDiv>
            <MenuTab userType="seller" productsLength={productList.length} />
            <ProductListBox
              productList={productList}
              fetchSellerList={fetchSellerList}
            />
          </S.FlexDiv>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
}
