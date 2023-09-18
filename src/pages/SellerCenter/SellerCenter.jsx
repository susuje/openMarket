import React from 'react'
import * as S from './SellerCenter.style'

import productUploadBtn from '../../assets/icon/productUploadBtn.svg'

import CenterTopNav from '../../components/TopNav/CenterTopNav'
import MenuTab from '../../components/SellerCenter/MenuTab'
import ProductListBox from '../../components/SellerCenter/ProductListBox'
import Footer from '../../components/Footer/Footer'

export default function SellerCenter() {
  return (
    <>
      <CenterTopNav />
      <S.Wrapper>
        <S.Container>
          <S.Flex>
            <S.H1>
              대시보드 <span>Kurong Shop</span>
            </S.H1>
            <button>
              <img src={productUploadBtn} alt="상품 업로드 버튼" />
            </button>
          </S.Flex>
          <S.FlexDiv>
            <MenuTab />
            <ProductListBox />
          </S.FlexDiv>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
}
