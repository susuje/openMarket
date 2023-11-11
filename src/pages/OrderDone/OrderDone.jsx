import React from 'react'
import * as S from './OrderDone.style'

import TopNavBar from '../../components/TopNav/TopNavBar'
import Footer from '../../components/Footer/Footer'
import gift from '../../assets/img/gift.png'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userTypeState } from '../../atoms/Atoms'

export default function OrderDone() {
  const navigate = useNavigate()
  const userType = useRecoilValue(userTypeState)
  return (
    <>
      <TopNavBar userType={userType} />
      <S.Container>
        <img src={gift} alt="선물이미지" />
        <S.TextWrapper>
          <h1>주문이 완료되었습니다!</h1>
        </S.TextWrapper>
        <S.BtnWrapper>
          <button onClick={() => navigate('/mypage')}>주문 상세보기</button>
          <button className="right" onClick={() => navigate('/')}>
            쇼핑 계속하기
          </button>
        </S.BtnWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
