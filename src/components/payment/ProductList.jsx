import React, { useEffect, useState } from 'react'
import * as S from './ProductList.style'

import { getProductDetail } from '../../api/ProductApi'

export default function ProductList({
  product_id,
  count,
  setTotalPrice,
  setTotalFee,
}) {
  const [productDetail, setProductDetail] = useState({})
  useEffect(() => {
    getProductDetail(product_id).then(data => {
      setProductDetail(data)
      setTotalPrice(prev => prev + data.price * count)
      setTotalFee(prev => prev + data.shipping_fee)
    })
  }, [])

  return (
    <S.Li>
      <S.Left>
        <div>
          <S.Img src={productDetail.image} />
          <S.ProductInfo>
            <p>{productDetail.store_name}</p>
            <S.ProductName>{productDetail.product_name}</S.ProductName>
            <p>수량 : {count}개</p>
          </S.ProductInfo>
        </div>
      </S.Left>
      <S.Right>
        <p>-</p>
        <p>{productDetail.shipping_fee?.toLocaleString()} 원</p>
        <strong>{(productDetail.price * count).toLocaleString()}원</strong>
      </S.Right>
    </S.Li>
  )
}
