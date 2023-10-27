import React, { useEffect, useState } from 'react'
import * as S from './Cart.style'

import Footer from '../../components/Footer/Footer'
import TopNavBar from '../../components/TopNav/TopNavBar'
import ProductList from '../../components/Cart/CartProductList'
import CartInfoBar from '../../components/Cart/CartInfoBar'
import DeleteProductBtn from '../../components/Cart/DeleteProductBtn'
import TotalPriceBar from '../../components/Cart/TotalPriceBar'

import { useRecoilValue } from 'recoil'
import { getMyCart } from '../../api/cartApi'
import { userTokenState } from '../../atoms/Atoms'

export default function Cart() {
  const token = useRecoilValue(userTokenState)
  const [myCartList, setMyCartList] = useState([])
  const [checkedProducts, setCheckedProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalFee, setTotalFee] = useState(0)
  const [allClick, setAllClick] = useState(false)
  const fetchCartList = () => {
    getMyCart(token).then(data => {
      setMyCartList(data.results)
      //  console.log(data.results)
    })
  }

  useEffect(() => {
    fetchCartList()
  }, [])

  return (
    <>
      <TopNavBar />
      <S.H1>장바구니</S.H1>
      <S.Container>
        <CartInfoBar
          setCheckedProducts={setCheckedProducts}
          checkedProducts={checkedProducts}
          myCartList={myCartList}
          setTotalPrice={setTotalPrice}
          setTotalFee={setTotalFee}
          setAllClick={setAllClick}
        />
        {myCartList.map(product => (
          <ProductList
            key={product.product_id}
            productId={product.product_id}
            quantity={product.quantity}
            cartItemId={product.cart_item_id}
            token={token}
            setTotalPrice={setTotalPrice}
            setTotalFee={setTotalFee}
            fetchCartList={fetchCartList}
            setCheckedProducts={setCheckedProducts}
            checkedProducts={checkedProducts}
            allClick={allClick}
            setAllClick={setAllClick}
          />
        ))}
        <DeleteProductBtn
          checkedProducts={checkedProducts}
          fetchCartList={fetchCartList}
          setCheckedProducts={setCheckedProducts}
          setTotalPrice={setTotalPrice}
          setTotalFee={setTotalFee}
        />
        <TotalPriceBar totalPrice={totalPrice} totalFee={totalFee} />
      </S.Container>
      <Footer />
    </>
  )
}
