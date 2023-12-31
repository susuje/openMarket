import React from 'react'
import * as S from './Modal.style'

import { deleteProduct } from '../../api/ProductApi'
import { deleteCartProduct } from '../../api/cartApi'
import { useRecoilValue } from 'recoil'
import { userTokenState, userTypeState } from '../../atoms/Atoms'

export default function Modal({
  productId,
  setIsModalOpen,
  cartItemId,
  fetchCartList,
  price,
  shipping,
  setTotalFee,
  setTotalPrice,
  setCheckedProducts,
  checkedProducts,
  content,
  fetchSellerList,
}) {
  const token = useRecoilValue(userTokenState)
  const userType = useRecoilValue(userTypeState)

  const handleDelete = () => {
    if (userType === 'BUYER') {
      if (content === '상품') {
        deleteCartProduct(token, cartItemId).then(data => {
          console.log(data)
          //window.alert('삭제됨')
          fetchCartList() //다시 내 카트 업데이트! 방금 삭제한 아이템은 없어짐.
          setCheckedProducts(checkedProducts.filter(x => x !== cartItemId))
          setTotalPrice(total => total - price) // 가격 업데이트
          setTotalFee(total => total - shipping) // 배송비 업데이트
        })
      } else {
        checkedProducts.forEach(x => {
          deleteCartProduct(token, x).then(data => {
            console.log(data)
            fetchCartList()
            setCheckedProducts(checkedProducts.filter(el => el !== x))
            setTotalPrice(0)
            setTotalFee(0)
          })
        })
      }
    } else {
      //판매자일때
      deleteProduct(token, productId).then(data => fetchSellerList())
    }
    setIsModalOpen(false)
  }

  return (
    <S.Container>
      <S.ModalWrapper>
        <S.CloseIcon
          onClick={() => {
            setIsModalOpen(false)
          }}
        />
        <S.P>{content}을 삭제하시겠습니까?</S.P>
        <S.Btn
          className="cancle"
          onClick={() => {
            setIsModalOpen(false)
          }}
        >
          취소
        </S.Btn>
        <S.Btn onClick={() => handleDelete()}>확인</S.Btn>
      </S.ModalWrapper>
    </S.Container>
  )
}
