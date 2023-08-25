import React from 'react'
import * as S from './SellerCenter.style'

import SellerTopNav from '../../components/TopNav/SellerTopNav'
import MenuTab from '../../components/SellerCenter/MenuTab'
import ProductListBox from '../../components/SellerCenter/ProductListBox'
import Footer from '../../components/Footer/Footer'

export default function SellerCenter() {
  return (
    <>
      <SellerTopNav />
      <S.Container>
        <S.H1>
          대시보드 <span>Kurong Shop</span>
        </S.H1>
        <S.FlexDiv>
          <MenuTab />
          <ProductListBox />
        </S.FlexDiv>
      </S.Container>
      <Footer />
    </>
  )
}
