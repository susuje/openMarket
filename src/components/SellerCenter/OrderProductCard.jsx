import React, { useEffect, useState } from 'react'
import * as S from './ProductCard.style'

import { getProductDetail } from '../../api/ProductApi'

export default function OrderProductCard({ productId, quantity, orderDate }) {
  const [productDetail, setProductDetail] = useState({})

  var now = new Date() //현재
  var whenOrder = new Date(orderDate.slice(0, 10)) //구매한 날짜

  var timeDiff = now.getTime() - whenOrder.getTime()
  var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) // 구매한 날짜로부터 오늘은 몇일째인가용

  useEffect(() => {
    getProductDetail(productId).then(data => {
      // console.log(data)
      setProductDetail(data)
    })
  }, [])

  return (
    <S.Wrapper>
      <S.ProductInfo>
        <img src={productDetail.image} alt="상품 이미지" />
        <S.NameStock>
          <h3>{productDetail.product_name}</h3>
          <p>구매 개수 : {quantity}개</p>
        </S.NameStock>
      </S.ProductInfo>
      <S.Price>{productDetail.price?.toLocaleString()} 원</S.Price>
      <S.Price>{orderDate.slice(0, 10)}</S.Price>
      <S.Price>{day >= 1 ? '배송완료' : '준비중'}</S.Price>
    </S.Wrapper>
  )
}
