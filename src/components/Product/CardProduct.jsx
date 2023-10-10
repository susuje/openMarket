import React from 'react'
import * as S from './CardProduct.style'

//import glass from '../../assets/img/glass.jpg'
import cartIcon from '../../assets/icon/large.svg'

export default function CardProduct({ product }) {
  return (
    <S.Card>
      <S.SellerName>{product.store_name}</S.SellerName>
      <S.ImgContainer $image={product.image}></S.ImgContainer>
      <S.ProductName>{product.product_name}</S.ProductName>
      <S.ProductPrice>
        {product.price.toLocaleString()}
        <span>원</span>
      </S.ProductPrice>
      <S.CartBtn>
        <img src={cartIcon} alt="장바구니 아이콘" />
      </S.CartBtn>
    </S.Card>
  )
}
