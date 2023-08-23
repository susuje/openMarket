import React from 'react'

import * as S from './ShippingForm.style'

export default function ShippingForm() {
  return (
    <S.FormContainer>
      <S.H2>배송정보</S.H2>
      <S.Info>
        <h3>주문자 정보</h3>
        <S.InputWrapper>
          <label htmlFor="name">이름</label>
          <input id="name" />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="phoneNum">휴대폰</label>
          <input id="phoneNum" className="first" />
          <p>-</p>
          <input id="phoneNum" />
          <p>-</p>
          <input id="phoneNum" />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="mail">이메일</label>
          <input id="mail" type="email" />
        </S.InputWrapper>
      </S.Info>
      <S.Info>
        <h3>배송지 정보</h3>
        <S.InputWrapper>
          <label htmlFor="reciever">수령인</label>
          <input id="reciever" />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="phoneNum">휴대폰</label>
          <input id="phoneNum" className="first" />
          <p>-</p>
          <input id="phoneNum" />
          <p>-</p>
          <input id="phoneNum" />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="address">배송주소</label>
          <input id="address" />
          <button>우편번호 조회</button>
        </S.InputWrapper>
      </S.Info>
    </S.FormContainer>
  )
}
