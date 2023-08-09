import React from 'react'
import * as S from './CartInfoBar.style'
import * as SC from './CartProductList.style'

export default function CartInfoBar() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.CheckLabel htmlFor="check">
          <S.CheckInput type="radio" id="check" />
        </S.CheckLabel>
        <p>상품정보</p>
      </S.Wrapper>

      <S.Wrapper className="second">
        <p>수량</p>
        <p>상품금액</p>
      </S.Wrapper>
    </S.Container>
  )
}
