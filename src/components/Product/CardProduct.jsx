import React, { useEffect, useState } from 'react'
import * as S from './CardProduct.style'

//import glass from '../../assets/img/glass.jpg'
import cartIcon from '../../assets/icon/large.svg'
import PutCartModal from '../Modal/PutCartModal'
import { putCartProduct } from '../../api/cartApi'
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../atoms/Atoms'

export default function CardProduct({ product, onClick, userType }) {
  const token = useRecoilValue(userTokenState)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //모달창 오픈시 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  //Buyer만 가능하게!
  const handleClickCart = () => {
    if (userType === 'BUYER') {
      const data = {
        product_id: product.product_id,
        quantity: 1,
        check: true,
      }
      console.log(data)

      putCartProduct(token, data)
        .then(data => {
          console.log(data)
          //window.alert('장바구니에 담겼어용')
          setIsModalOpen(true)
        })
        .catch(error => {
          window.alert(error.response.data.FAIL_message) // 실패
        })
    } else {
      window.alert('BUYER만 이용할 수 있습니다')
    }
  }

  return (
    <>
      {isModalOpen ? <PutCartModal setIsModalOpen={setIsModalOpen} /> : null}
      <S.Card onClick={onClick}>
        <S.SellerName>{product.store_name}</S.SellerName>
        <S.ImgContainer
          $image={product.image}
          className={product.stock === 0 ? 'soldout' : null}
        ></S.ImgContainer>
        {product.stock === 0 ? <S.H1Soldout>SOLD OUT</S.H1Soldout> : null}
        <S.ProductName>{product.product_name}</S.ProductName>
        <S.ProductPrice>
          {product.price.toLocaleString()}
          <span>원</span>
        </S.ProductPrice>
        <S.CartBtn>
          <img
            src={cartIcon}
            alt="장바구니 아이콘"
            onClick={e => {
              e.stopPropagation() //없으면 S.Card onClick발동!
              handleClickCart()
            }}
          />
        </S.CartBtn>
      </S.Card>
    </>
  )
}
