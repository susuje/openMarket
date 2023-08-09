import React from 'react'
import * as S from './Cart.style'

import ProductList from '../../components/Cart/CartProductList'
import CartInfoBar from '../../components/Cart/CartInfoBar'
import DeleteProductBtn from '../../components/Cart/DeleteProductBtn'
import TotalPriceBar from '../../components/Cart/TotalPriceBar'

export default function Cart() {
  return (
    <>
      <CartInfoBar />
      <ProductList />
      <DeleteProductBtn />
      <TotalPriceBar />
    </>
  )
}
