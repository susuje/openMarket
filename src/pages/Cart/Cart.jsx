import React from 'react'
import * as S from './Cart.style'

import Footer from '../../components/Footer/Footer'
import TopNavBar from '../../components/TopNav/TopNavBar'
import ProductList from '../../components/Cart/CartProductList'
import CartInfoBar from '../../components/Cart/CartInfoBar'
import DeleteProductBtn from '../../components/Cart/DeleteProductBtn'
import TotalPriceBar from '../../components/Cart/TotalPriceBar'

export default function Cart() {
  return (
    <>
      <TopNavBar />
      <S.H1>장바구니</S.H1>
      <S.Container>
        <CartInfoBar />
        <ProductList />
        <DeleteProductBtn />
        <TotalPriceBar />
      </S.Container>
      <Footer />
    </>
  )
}
