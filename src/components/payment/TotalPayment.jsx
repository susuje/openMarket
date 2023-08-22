import React from 'react'
import * as S from './TotalPayment.style'

import unchecked from '../../assets/icon/unchecked-box.svg'
import checked from '../../assets/icon/check-fill-box.svg'

export default function TotalPayment() {
  return (
    <>
      <S.H3>최종결제 정보</S.H3>
      <S.Container>
        <S.FirstDiv>
          <S.FlexDiv>
            <p>- 상품금액</p>
            <p>
              <span>46,500</span>원
            </p>
          </S.FlexDiv>
          <S.FlexDiv>
            <p>- 할인금액</p>
            <p>
              <span>0</span>원
            </p>
          </S.FlexDiv>
          <S.FlexDiv className="ship">
            <p>- 배송비</p>
            <p>
              <span>2,500</span>원
            </p>
          </S.FlexDiv>
          <S.FlexDiv>
            <p>- 결제금액</p>
            <strong>49,000원</strong>
          </S.FlexDiv>
        </S.FirstDiv>
        <S.LastDiv>
          <div>
            <input type="checkbox" id="check" required />
            <label htmlFor="check">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </label>
          </div>
          <S.Button>결제하기</S.Button>
        </S.LastDiv>
      </S.Container>
    </>
  )
}
