import React from 'react'

import * as S from './ProductListBox.style'
import ProductCard from './ProductCard'

export default function ProductListBox({ productList }) {
  return (
    <S.Container>
      <S.InfoBar>
        <p>상품정보</p>
        <p>판매가격</p>
        <p>수정</p>
        <p>삭제</p>
      </S.InfoBar>
      <S.ProductList>
        {productList.map(product => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </S.ProductList>
    </S.Container>
  )
}

//ProductCard 를 div로 감쌈. div는     height: 100%;
// overflow-y: scroll;
