import React from 'react'
import * as S from './Modal.style'
import { useNavigate } from 'react-router-dom'
export default function PutCartModal({ setIsModalOpen }) {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.ModalWrapper>
        <S.CloseIcon
          onClick={() => {
            setIsModalOpen(false)
          }}
        />
        <S.P>
          장바구니에 담겼습니다!
          <br /> 장바구니로 이동할까요?
        </S.P>
        <S.Btn
          className="cancle"
          onClick={() => {
            setIsModalOpen(false)
          }}
        >
          취소
        </S.Btn>
        <S.Btn onClick={() => navigate('/cart')}>확인</S.Btn>
      </S.ModalWrapper>
    </S.Container>
  )
}
