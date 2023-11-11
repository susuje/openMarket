import React, { useEffect, useState } from 'react'
import * as S from './Payment.style'

import { useLocation } from 'react-router-dom'
import TopNavBar from '../../components/TopNav/TopNavBar'
import ProductList from '../../components/payment/ProductList'
import ShippingForm from '../../components/payment/ShippingForm'

import { getMyCartDetail } from '../../api/cartApi'
import { useRecoilValue } from 'recoil'
import { userTokenState, userTypeState } from '../../atoms/Atoms'
export default function Payment() {
  const token = useRecoilValue(userTokenState)
  const userType = useRecoilValue(userTypeState)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalFee, setTotalFee] = useState(0)
  const location = useLocation()
  const { product_id, count, order_kind, cartItemsIds, cartItemId } =
    location.state
  const [productId, setProductId] = useState(product_id || [])
  const [counts, setCounts] = useState(count || [])

  useEffect(() => {
    console.log(product_id, count, '바로구매 또는 하나구매')

    //바로 구매 - 한개일때 [160] [3]
    if (cartItemsIds) {
      //cart에서 여러개 구매할때
      console.log(cartItemsIds, '카트아이템')

      cartItemsIds.map(cartItemId =>
        getMyCartDetail(token, cartItemId).then(data => {
          setProductId(prev => [...prev, data.product_id])
          setCounts(prev => [...prev, data.quantity])
        })
      )
    }
  }, [])

  return (
    <>
      <TopNavBar userType={userType} />
      <S.Wrapper>
        <S.CartInfoBar>
          <p>상품정보</p>
          <div>
            <p>할인</p>
            <p>배송비</p>
            <p>주문금액</p>
          </div>
        </S.CartInfoBar>
        {productId.map(
          (
            product_id,
            index //여러개일때 count index 설정해줘야함
          ) => (
            <ProductList
              product_id={product_id}
              count={counts[index]}
              setTotalPrice={setTotalPrice}
              setTotalFee={setTotalFee}
            />
          )
        )}
        <S.TotalPrice>
          총 주문금액
          <strong>{totalPrice.toLocaleString()}원</strong>
        </S.TotalPrice>
        <ShippingForm
          totalPrice={totalPrice}
          totalFee={totalFee}
          order_kind={order_kind}
          product_id={product_id}
          count={count}
          cartItemId={cartItemId}
        />
      </S.Wrapper>
    </>
  )
}
