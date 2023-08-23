import React from 'react'
import * as S from './ProductList.style'

import img from '../../assets/img/cate3.png'
export default function ProductList() {
  return (
    <S.Li>
      <S.Left>
        <div>
          <S.Img src={img} />
          <S.ProductInfo>
            <p>Claire_LeMarket</p>
            <S.ProductName>스웨이드 플립 플랍 어쩌구 이름</S.ProductName>
            <p>수량 : 1개</p>
          </S.ProductInfo>
        </div>
      </S.Left>
      <S.Right>
        <p>-</p>
        <p>2,500 원</p>
        <strong>17,500원</strong>
      </S.Right>
    </S.Li>
  )
}
