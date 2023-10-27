import React, { useEffect, useState } from 'react'
import * as S from './CartProductList.style'

import AmountBtn from '../Product/AmountBtn'
//import Img from '../../assets/img/cate4.png'
import Modal from '../Modal/Modal'

import { getProductDetail } from '../../api/ProductApi'
//import { getMyCartDetail } from '../../api/cartApi'

export default function CartProductList({
  productId,
  quantity,
  token,
  cartItemId,
  setTotalPrice,
  setTotalFee,
  fetchCartList,
  checkedProducts,
  setCheckedProducts,
  allClick,
  setAllClick,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity)
  //clicked True인것만 cartItemId 저장=> 삭제할때

  const handleRadioCheck = cartItemId => {
    //console.log(cartItemId)
    const productChecked = checkedProducts.includes(cartItemId)
    if (productChecked) {
      setCheckedProducts(checkedProducts.filter(p => p !== cartItemId))
      setTotalFee(total => total - productDetail.shipping_fee)
      setTotalPrice(total => total - productDetail.price * updatedQuantity)
    } else {
      setCheckedProducts([...checkedProducts, cartItemId])
      setTotalFee(total => total + productDetail.shipping_fee)
      setTotalPrice(total => total + productDetail.price * updatedQuantity)
    }
  }

  useEffect(() => {
    console.log('실행하자')
    setCheckedProducts(prev => [...prev, cartItemId])
    getProductDetail(productId).then(data => {
      setProductDetail(data)
      const thisPrice = data.price * updatedQuantity
      setTotalFee(total => total + data.shipping_fee)
      setTotalPrice(total => total + thisPrice)
    })
  }, [])

  useEffect(() => {
    console.log(checkedProducts)
    if (allClick) {
      //console.log('allClick', checkedProducts)
      setTotalFee(total => total + productDetail.shipping_fee)
      setTotalPrice(total => total + productDetail.price * updatedQuantity)
      setAllClick(false)
    }
  }, [checkedProducts])

  useEffect(() => {
    //모달오픈시 스크롤못하게
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      {isModalOpen ? (
        <Modal
          setIsModalOpen={setIsModalOpen}
          cartItemId={cartItemId}
          fetchCartList={fetchCartList}
          setTotalPrice={setTotalPrice}
          setTotalFee={setTotalFee}
          price={productDetail.price * updatedQuantity}
          shipping={productDetail.shipping_fee}
          setCheckedProducts={setCheckedProducts}
          checkedProducts={checkedProducts}
          content={'상품'}
        />
      ) : null}
      <S.Article>
        <S.Wrapper>
          <S.CheckLabel
            className={
              checkedProducts.includes(cartItemId) ? 'checked' : 'unchecked'
            }
          >
            <S.CheckInput
              type="radio"
              id="radio"
              onClick={() => handleRadioCheck(cartItemId)}
            />
          </S.CheckLabel>
          <S.ProductImg src={productDetail.image} />
          <S.ProductInfo>
            <p>{productDetail.store_name}</p>
            <S.ProductName>{productDetail.product_name}</S.ProductName>
            <S.Price>{productDetail.price?.toLocaleString()}원</S.Price>
            <p>
              {productDetail.shipping_method === 'PARCEL' ? '택배' : '직접'}{' '}
              배송 / 배송비{' '}
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
              setTotalPrice={setTotalPrice}
              price={productDetail.price}
              checkedProducts={checkedProducts}
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
        <S.DeleteBtn
          onClick={() => {
            setIsModalOpen(true)
          }}
        />
      </S.Article>
    </>
  )
}
