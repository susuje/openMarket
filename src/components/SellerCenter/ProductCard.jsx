import React from 'react'

import * as S from './ProductCard.style'
import img from '../../assets/img/glass.jpg'
export default function ProductCard() {
  return (
    <S.Wrapper>
      <S.ProductInfo>
        <img src={img} alt="상품 이미지" />
        <S.NameStock>
          <h3>화이트 유리화병 오브제</h3>
          <p>재고 : 370개</p>
        </S.NameStock>
      </S.ProductInfo>
      <S.Price>17,500원</S.Price>
      <S.Btn className="modify">수정</S.Btn>
      <S.Btn className="delete">삭제</S.Btn>
    </S.Wrapper>
  )
}
