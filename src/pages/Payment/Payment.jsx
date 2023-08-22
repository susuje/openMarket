import React from 'react'
import * as S from './Payment.style'

import TotalPayment from '../../components/payment/TotalPayment'
import ProductList from '../../components/payment/ProductList'

export default function Payment() {
  return (
    <>
      <ProductList />
      <TotalPayment />
    </>
  )
}
