import React from 'react'
import * as S from './CardProduct.style'

import glass from '../../assets/img/glass.jpg'
import cartIcon from '../../assets/icon/card-cart.svg'

export default function CardProduct() {
  return (
    <S.Card>
      <S.SellerName>Claire_LeMarket</S.SellerName>
      <S.Img src={glass} />
      <S.ProductName>화이트 유리화병 오브제</S.ProductName>
      <S.ProductPrice>29,000원</S.ProductPrice>
      <S.CartBtn>
        <img src={cartIcon} alt="장바구니 아이콘" />
      </S.CartBtn>
    </S.Card>
  )
}
