import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import * as S from './ProductDetail.style'
import TopNavBar from '../../components/TopNav/TopNavBar'
import DetailTab from '../../components/Product/DetailTab'
import Footer from '../../components/Footer/Footer'

import sampleImg from '../../assets/img/voyage.jpg'
import AmountBtn from '../../components/Product/AmountBtn'
import { useParams } from 'react-router-dom'

import { getProductDetail } from '../../api/ProductApi'

export default function ProductDetail() {
  //스크롤 항상 맨위에 있게해야함
  const { product_id } = useParams()
  const [productDetail, setProductDetail] = useState({})

  useEffect(() => {
    getProductDetail(product_id).then(data => {
      setProductDetail(data)
    })
  }, [])
  return (
    <>
      <TopNavBar />
      <S.Container>
        <S.Img src={productDetail.image} />
        <S.InfoWrapper>
          <p>{productDetail.store_name}</p>
          <S.ProductName>{productDetail.product_name}</S.ProductName>
          <p className="won">
            <S.Price>
              {productDetail.price !== undefined && productDetail.price !== null
                ? productDetail.price.toLocaleString()
                : ''}
            </S.Price>
            원
          </p>
          <p className="ship">
            {productDetail.shipping_method === 'PARCEL' ? '택배' : '직접'}배송 /
            {productDetail.shipping_fee !== undefined &&
            productDetail.shipping_fee !== null
              ? productDetail.shipping_fee === 0
                ? ' 무료배송'
                : ` 배송비 ${productDetail.shipping_fee.toLocaleString()} 원`
              : ''}
          </p>
          <S.Div>
            <AmountBtn />
          </S.Div>
          <S.TotalPriceDiv>
            <p>총 상품 금액</p>
            <div>
              <p>
                총 수량 <span>1</span>개
              </p>
              <p>|</p>
              <strong>
                <S.Price>17,500</S.Price>원
              </strong>
            </div>
          </S.TotalPriceDiv>
          <S.Btns>
            <S.Btn>바로 구매</S.Btn>
            <S.Btn className="cart">장바구니</S.Btn>
          </S.Btns>
        </S.InfoWrapper>
      </S.Container>
      <DetailTab />
      <S.Content>제품상세</S.Content>
      <Footer />
    </>
  )
}
