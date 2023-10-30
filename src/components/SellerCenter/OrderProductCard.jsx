import React, { useEffect, useState } from 'react'
import * as S from './ProductCard.style'

import img from '../../assets/img/glass.jpg'
import { getProductDetail } from '../../api/ProductApi'

export default function OrderProductCard({ productId, quantity, orderDate }) {
  const [productDetail, setProductDetail] = useState({})
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
    </S.Wrapper>
  )
}
