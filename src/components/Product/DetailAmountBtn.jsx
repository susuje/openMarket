import React from 'react'
import * as S from './AmountBtn.style'

export default function DetailAmountBtn({ count }) {
  return (
    <S.CountDiv>
      <S.CountBtn>
        <span className="visually-hidden">-</span>
      </S.CountBtn>
      <S.Num>{count}</S.Num>
      <S.CountBtn className="right">
        <span className="visually-hidden">+</span>
      </S.CountBtn>
    </S.CountDiv>
  )
}
