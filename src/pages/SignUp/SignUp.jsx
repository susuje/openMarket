import React from 'react'
import * as S from './SignUp.style'
import * as SC from '../Login/LoginSign.style'

import logo from '../../assets/icon/bigLogo.svg'
import TabBtn from '../../components/TabBtn/TabBtn'
import SignForm from '../../components/LoginSignForm/SignForm'

export default function SignUp() {
  return (
    <SC.Container>
      <SC.Img src={logo} alt="로고" />
      <TabBtn content={'가입'} />
      <SignForm />
      <S.CheckDiv>
        <S.CheckInput type="checkbox" />
        <S.P>
          플레이랩의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
          동의합니다.
        </S.P>
      </S.CheckDiv>
      <S.JoinBtn>가입하기</S.JoinBtn>
    </SC.Container>
  )
}
