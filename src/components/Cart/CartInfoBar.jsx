import React, { useEffect, useState } from 'react'
import * as S from './CartInfoBar.style'

export default function CartInfoBar({
  checkedProducts,
  setCheckedProducts,
  myCartList,
  setTotalPrice,
  setTotalFee,
  setAllClick,
}) {
  const handleClick = () => {
    if (checkedProducts.length === myCartList.length) {
      setAllClick(false)
      setCheckedProducts([])
      setTotalPrice(0)
      setTotalFee(0)
    } else {
      //fetchCartList()
      console.log('모든CartProduct다 선택되어야함')
      setTotalPrice(0)
      setTotalFee(0)
      setCheckedProducts(myCartList.map(x => x.cart_item_id))
      setAllClick(true)
      // console.log(myCartList, 'hi')
    }
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.CheckLabel
          htmlFor="check"
          className={
            checkedProducts.length === myCartList.length
              ? 'checked'
              : 'unchecked'
          }
        >
          <S.CheckInput type="radio" id="check" onClick={() => handleClick()} />
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
