import React, { useState } from 'react'
import * as S from './AmountBtn.style'

import { modifyCartQuantity } from '../../api/cartApi'

export default function AmountBtn({
  updatedQuantity,
  setUpdatedQuantity,
  stock,
  token,
  cartItemId,
  productId,
}) {
  const handleAmountClick = e => {
    const data = {
      product_id: productId,
      quantity: '',
      is_active: true,
    }

    e.target.children[0].innerHTML === '+'
      ? (data.quantity = updatedQuantity + 1)
      : (data.quantity = updatedQuantity - 1)

    modifyCartQuantity(token, cartItemId, data)
      .then(data => {
        console.log(data)
        setUpdatedQuantity(data.quantity)
      })
      .catch(error => {
        window.alert(error.response.data.FAIL_message) // 실패
      })
  }

  return (
    <S.CountDiv>
      <S.CountBtn
        onClick={e => handleAmountClick(e)}
        disabled={updatedQuantity === 1 ? true : false}
      >
        <span className="visually-hidden">-</span>
      </S.CountBtn>
      <S.Num>{updatedQuantity}</S.Num>
      <S.CountBtn
        className="right"
        onClick={e => handleAmountClick(e)}
        disabled={stock === updatedQuantity ? true : false}
      >
        <span className="visually-hidden">+</span>
      </S.CountBtn>
    </S.CountDiv>
  )
}
