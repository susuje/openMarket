import React from 'react'
import * as S from './ProductCard.style'

//import product from '../../assets/img/mu.jpg'

export default function ProductCard({ product, onClick }) {
  return (
    <S.Container onClick={onClick}>
      <S.LeftWrapper>
        <img src={product.image} alt="상품 이미지" />
        <S.ProductInfo>
          <p className="name">{product.product_name}</p>
          <p className="price">{product.price.toLocaleString()} 원</p>
          <p className="shipping">
            {' '}
            {product.shipping_method === 'PARCEL' ? '택배' : '직접'} 배송 /
            {product.shipping_fee === 0
              ? ' 무료배송'
              : ` 배송비 ${product.shipping_fee.toLocaleString()} 원`}
          </p>
        </S.ProductInfo>
      </S.LeftWrapper>
      <S.RightWrapper>
        <p className="store">{product.store_name}</p>
        <p className="createdAt">등록일 : {product.created_at.slice(0, 10)}</p>
      </S.RightWrapper>
    </S.Container>
  )
}
