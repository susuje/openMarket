import React, { useState } from 'react'
import * as S from './AmountBtn.style'

export default function AmountBtn() {
  return (
    <S.CountDiv>
      <S.CountBtn></S.CountBtn>
      <S.Num>1</S.Num>
      <S.CountBtn className="right"></S.CountBtn>
    </S.CountDiv>
  )
}
