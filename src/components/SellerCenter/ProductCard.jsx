import React from 'react'

import * as S from './ProductCard.style'
//import img from '../../assets/img/glass.jpg'

import { deleteProduct } from '../../api/ProductApi'
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../atoms/Atoms'

export default function ProductCard({ product }) {
  const token = useRecoilValue(userTokenState)

  return (
    <S.Wrapper>
      <S.ProductInfo>
        <img src={product.image} alt="상품 이미지" />
        <S.NameStock>
          <h3>{product.product_name}</h3>
          <p>재고 : {product.stock}개</p>
        </S.NameStock>
      </S.ProductInfo>
      <S.Price>{product.price.toLocaleString()} 원</S.Price>
      <S.Btn className="modify">수정</S.Btn>
      <S.Btn
        className="delete"
        onClick={() => deleteProduct(token, product.product_id)}
      >
        삭제
      </S.Btn>
    </S.Wrapper>
  )
}
