import React, { useEffect, useState } from 'react'
import * as S from '../SellerCenter/SellerCenter.style'
import { useRecoilValue } from 'recoil'
import { userTypeState, userTokenState } from '../../atoms/Atoms'
import { getMyOrder } from '../../api/orderApi'
import TopNavBar from '../../components/TopNav/TopNavBar'
import Footer from '../../components/Footer/Footer'
import MenuTab from '../../components/SellerCenter/MenuTab'
import ProductListBox from '../../components/SellerCenter/ProductListBox'

export default function Mypage() {
  const [productList, setProductList] = useState([])
  const userType = useRecoilValue(userTypeState)
  const token = useRecoilValue(userTokenState)
  useEffect(() => {
    getMyOrder(token).then(data => {
      setProductList(data.results)
      console.log(data.results)
    })
  }, [])

  return (
    <>
      <TopNavBar userType={userType} />
      <S.Wrapper>
        <S.Container>
          <S.Flex>
            <S.H1>마이페이지</S.H1>
          </S.Flex>
          <S.FlexDiv>
            <MenuTab userType={userType} />
            <ProductListBox productList={productList} userType={userType} />
          </S.FlexDiv>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
}
