import React from 'react'
import * as S from './Payment.style'

import TotalPayment from '../../components/payment/TotalPayment'
import ProductList from '../../components/payment/ProductList'
import ShippingForm from '../../components/payment/ShippingForm'

export default function Payment() {
  return (
    <S.Wrapper>
      <S.CartInfoBar>
        <p>상품정보</p>
        <div>
          <p>할인</p>
          <p>배송비</p>
          <p>주문금액</p>
        </div>
      </S.CartInfoBar>
      <ProductList />
      <ProductList />
      <S.TotalPrice>
        총 주문금액
        <strong>260,000원</strong>
      </S.TotalPrice>
      <ShippingForm />
    </S.Wrapper>
  )
}
