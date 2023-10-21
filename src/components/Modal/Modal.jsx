import React from 'react'
import * as S from './Modal.style'

import { deleteProduct } from '../../api/ProductApi'
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../atoms/Atoms'

export default function Modal({ productId, setIsModalOpen }) {
  const token = useRecoilValue(userTokenState)

  return (
    <S.Container>
      <S.ModalWrapper>
        <S.CloseIcon
          onClick={() => {
            setIsModalOpen(false)
          }}
        />
        <S.P>상품을 삭제하시겠습니까?</S.P>
        <S.Btn
          className="cancle"
          onClick={() => {
            setIsModalOpen(false)
          }}
        >
          취소
        </S.Btn>
        <S.Btn
          onClick={() => {
            deleteProduct(token, productId)
            setIsModalOpen(false)
          }}
        >
          확인
        </S.Btn>
      </S.ModalWrapper>
    </S.Container>
  )
}
