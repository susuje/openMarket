import React from 'react'

import * as S from './ProductListBox.style'
import ProductCard from './ProductCard'
import OrderProductCard from './OrderProductCard'
export default function ProductListBox({ productList, userType }) {
  const infoBar =
    userType === 'BUYER'
      ? ['상품정보', '구매가격', '구매날짜', '배송현황']
      : ['상품정보', '판매가격', '수정', '삭제']

  return (
    <S.Container>
      <S.InfoBar>
        {infoBar.map(txt => (
          <p>{txt}</p>
        ))}
      </S.InfoBar>
      <S.ProductList>
        {userType === 'BUYER'
          ? productList.map(x =>
              x.order_items.map((productId, index) => (
                <OrderProductCard
                  productId={productId}
                  quantity={x.order_quantity[index]}
                  orderDate={x.updated_at}
                />
              ))
            )
          : productList.map(product => (
              <ProductCard key={product.product_id} product={product} />
            ))}
      </S.ProductList>
    </S.Container>
  )
}

//ProductCard 를 div로 감쌈. div는     height: 100%;
// overflow-y: scroll;

//order_items:  [159, 127, 126]
//order_quantity:  [1, 1, 1]
//created_at: "2023-10-30T11:44:56.684627"
//delivery_status:"COMPLETE_PAYMENT"
