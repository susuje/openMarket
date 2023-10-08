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
  const { product_id } = useParams()

  useEffect(() => {
    // getMyInfoAPI(token).then(data => {
    //   setMyProfileImg(data.user.image) //프로필 사진 가져오기
    // })
    // getPostDetailAPI(postId, token).then(data => {
    //   setPostData(data) //postData는 지금 {post: 어쩌구..}, post =postData.post
    // })
  }, [])
  return (
    <>
      <TopNavBar />
      <S.Container>
        <S.Img src={sampleImg} />
        <S.InfoWrapper>
          <p>Claire_LeMarket</p>
          <S.ProductName>14인치 기내용 어린이 캐리어 - 블루</S.ProductName>
          <p className="won">
            <S.Price>85,000</S.Price>원
          </p>
          <p className="ship">택배배송 / 무료배송</p>
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
