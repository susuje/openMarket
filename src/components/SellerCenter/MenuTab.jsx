import React from 'react'

import * as S from './MenuTab.style'

export default function MenuTab() {
  return (
    <S.Wrapper>
      <S.Btn className="active">판매중인 상품(2)</S.Btn>
      <S.Btn>주문/배송</S.Btn>
      <S.Btn>문의/리뷰</S.Btn>
      <S.Btn>통계</S.Btn>
      <S.Btn>스토어 설정</S.Btn>
    </S.Wrapper>
  )
}
