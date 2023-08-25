import React from 'react'

import * as S from './ShippingForm.style'
import TotalPayment from './TotalPayment'

export default function ShippingForm() {
  return (
    <S.FormContainer>
      <S.H2 className="ship">배송정보</S.H2>
      <S.Info>
        <h3>주문자 정보</h3>
        <S.InputWrapper width="334px">
          <label htmlFor="name">이름</label>
          <input id="name" />
        </S.InputWrapper>
        <S.InputWrapper width="100px">
          <label htmlFor="phoneNum">휴대폰</label>
          <input id="phoneNum" className="first" />
          <p>-</p>
          <input id="phoneNum" />
          <p>-</p>
          <input id="phoneNum" />
        </S.InputWrapper>
        <S.InputWrapper width="334px">
          <label htmlFor="mail">이메일</label>
          <input id="mail" type="email" width="334px" />
        </S.InputWrapper>
      </S.Info>
      <S.Info>
        <h3>배송지 정보</h3>
        <S.InputWrapper width="334px">
          <label htmlFor="reciever">수령인</label>
          <input id="reciever" width="334px" />
        </S.InputWrapper>
        <S.InputWrapper width="100px">
          <label htmlFor="phoneNum">휴대폰</label>
          <input id="phoneNum" className="first" />
          <p>-</p>
          <input id="phoneNum" />
          <p>-</p>
          <input id="phoneNum" />
        </S.InputWrapper>
        <S.InputWrapper width="170px">
          <label htmlFor="address">배송주소</label>
          <input id="address" />
          <button>우편번호 조회</button>
          <br />
          <input className="long" />
          <br />
          <input className="long" />
        </S.InputWrapper>
        <S.InputWrapper width="800px">
          <label htmlFor="message">배송 메세지</label>
          <input id="message" />
        </S.InputWrapper>
      </S.Info>

      <S.FlexDiv>
        <S.Wrapper>
          <S.H2>결제수단</S.H2>
          <S.Payment>
            <div>
              <input type="radio" />
              <label>신용/체크카드</label>
            </div>
            <div>
              <input type="radio" />
              <label>무통장 입금</label>
            </div>
            <div>
              <input type="radio" />
              <label>휴대폰 결제</label>
            </div>
            <div>
              <input type="radio" />
              <label>네이버페이</label>
            </div>
            <div>
              <input type="radio" />
              <label>카카오페이</label>
            </div>
          </S.Payment>
        </S.Wrapper>
        <TotalPayment />
      </S.FlexDiv>
    </S.FormContainer>
  )
}
