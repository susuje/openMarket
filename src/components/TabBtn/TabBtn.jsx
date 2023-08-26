import React from 'react'
import * as S from './TabBtn.style'
export default function TabBtn({ content, setIsBuyer, IsBuyer }) {
  return (
    <S.Container>
      <S.Btn
        onClick={() => setIsBuyer(true)}
        className={IsBuyer ? 'active' : null}
      >
        구매회원 {content}
      </S.Btn>
      <S.Btn
        onClick={() => setIsBuyer(false)}
        className={IsBuyer ? null : 'active'}
      >
        판매회원 {content}
      </S.Btn>
    </S.Container>
  )
}
