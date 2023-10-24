import React, { useEffect, useState } from 'react'
import * as S from './CartProductList.style'

import AmountBtn from '../Product/AmountBtn'
import Img from '../../assets/img/cate4.png'

import { getProductDetail } from '../../api/ProductApi'
//import { getMyCartDetail } from '../../api/cartApi'

export default function CartProductList({
  productId,
  quantity,
  token,
  cartItemId,
  setTotalPrice,
  setTotalFee,
}) {
  const [productDetail, setProductDetail] = useState({})
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity)
  useEffect(() => {
    getProductDetail(productId).then(data => {
      setProductDetail(data)
      // const thisPrice=data.price * updatedQuantity
      // console.log(updatedQuantity) 아마 AmountBtn에서 총결제 하는 로직을 짜야할듯..
      //setTotalPrice(total => data.price * updatedQuantity + total)
    })
  }, [updatedQuantity])

  return (
    <S.Article>
      <S.Wrapper>
        <S.CheckLabel htmlFor="check">
          <S.CheckInput type="radio" id="check" />
        </S.CheckLabel>
        <S.ProductImg src={productDetail.image} />
        <S.ProductInfo>
          <p>{productDetail.store_name}</p>
          <S.ProductName>{productDetail.product_name}</S.ProductName>
          <S.Price>{productDetail.price?.toLocaleString()}원</S.Price>
          <p>
            {productDetail.shipping_method === 'PARCEL' ? '택배' : '직접'} 배송
            / 배송비{' '}
            {productDetail.shipping_fee === 0
              ? '무료'
              : `${productDetail.shipping_fee?.toLocaleString()}원`}
          </p>
        </S.ProductInfo>
      </S.Wrapper>
      <S.Wrapper className="second">
        <S.CountDiv>
          <AmountBtn
            updatedQuantity={updatedQuantity}
            setUpdatedQuantity={setUpdatedQuantity}
            stock={productDetail.stock}
            token={token}
            cartItemId={cartItemId}
            productId={productId}
          />
          <p>재고 : {productDetail.stock}</p>
        </S.CountDiv>
        <S.FlexDiv>
          <S.TotalPrice>
            {(productDetail.price * updatedQuantity).toLocaleString()}원
          </S.TotalPrice>
          <S.BuyBtn>주문하기</S.BuyBtn>
        </S.FlexDiv>
      </S.Wrapper>
      <S.DeleteBtn />
    </S.Article>
  )
}
