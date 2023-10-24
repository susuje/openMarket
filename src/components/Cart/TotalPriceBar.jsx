import React, { useEffect } from 'react'
import * as S from './TotalPriceBar.style'

import plus from '../../assets/icon/price-plus.svg'
import minus from '../../assets/icon/price-minus.svg'

export default function TotalPriceBar(totalPrice) {
  return (
    <S.Container>
      <S.CalculDiv>
        <p>총 상품금액</p>
        <p>
          <span>46,500</span>원
        </p>
      </S.CalculDiv>
      <S.Icon src={minus} />
      <S.CalculDiv>
        <p>상품 할인</p>
        <p>
          <span>0</span>원
        </p>
      </S.CalculDiv>
      <S.Icon src={plus} />
      <S.CalculDiv>
        <p>배송비</p>
        <p>
          <span>2,500</span>원
        </p>
      </S.CalculDiv>
      <S.TotalPrice>
        <p>결제 예정 금액</p>
        <p>
          <span>{totalPrice?.totalPrice}</span>원
        </p>
      </S.TotalPrice>
    </S.Container>
  )
}
