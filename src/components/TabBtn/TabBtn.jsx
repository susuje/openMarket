import React from 'react'
import * as S from './TabBtn.style'
export default function TabBtn({ content }) {
  return (
    <S.Container>
      <S.LeftBtn>구매회원 {content}</S.LeftBtn>
      <S.RightBtn>판매회원 {content}</S.RightBtn>
    </S.Container>
  )
}
