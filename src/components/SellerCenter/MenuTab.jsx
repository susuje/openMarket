import React from 'react'

import * as S from './MenuTab.style'

export default function MenuTab({ userType }) {
  return (
    <S.Wrapper>
      <S.Btn className="active">
        {userType === 'seller' ? '판매중인 상품 (2)' : '주문 상품 조회'}
      </S.Btn>
      <S.Btn>문의/리뷰</S.Btn>
      {userType === 'seller' ? <S.Btn>통계</S.Btn> : null}
      <S.Btn> {userType === 'seller' ? '스토어 설정' : '개인 정보 설정'}</S.Btn>
    </S.Wrapper>
  )
}
