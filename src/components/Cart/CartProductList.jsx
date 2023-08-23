import React from 'react'
import * as S from './CartProductList.style'

import AmountBtn from '../Product/AmountBtn'
import Img from '../../assets/img/cate4.png'

export default function CartProductList() {
  return (
    <S.Article>
      <S.Wrapper>
        <S.CheckLabel htmlFor="check">
          <S.CheckInput type="radio" id="check" />
        </S.CheckLabel>
        <S.ProductImg src={Img} />
        <S.ProductInfo>
          <p>Claire_LeMarket</p>
          <S.ProductName>스웨이드 플립 플랍 어쩌구 이름</S.ProductName>
          <S.Price>17,500원</S.Price>
          <p>택배배송 / 무료배송</p>
        </S.ProductInfo>
      </S.Wrapper>
      <S.Wrapper className="second">
        <AmountBtn />
        <S.FlexDiv>
          <S.TotalPrice>17,500원</S.TotalPrice>
          <S.BuyBtn>주문하기</S.BuyBtn>
        </S.FlexDiv>
      </S.Wrapper>
      <S.DeleteBtn />
    </S.Article>
  )
}
