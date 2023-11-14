import React from 'react'

import * as S from './MenuTab.style'

export default function MenuTab({ userType, productsLength }) {
  return (
    <S.Wrapper>
      <S.Btn>
        {userType === 'seller'
          ? `판매중인 상품 (${productsLength})`
          : '주문 상품 조회'}
      </S.Btn>
    </S.Wrapper>
  )
}
