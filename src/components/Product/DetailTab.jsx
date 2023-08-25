import React from 'react'

import * as S from './DetailTab.style'

export default function DetailTab() {
  return (
    <S.Tab>
      <S.Btn className="active">제품 상세</S.Btn>
      <S.Btn>리뷰</S.Btn>
      <S.Btn>Q&A</S.Btn>
      <S.Btn>반품/교환정보</S.Btn>
    </S.Tab>
  )
}
