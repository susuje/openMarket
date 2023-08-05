import React from 'react'
import * as S from './Login.style'

import logo from '../../assets/icon/bigLogo.svg'
import LoginForm from '../../components/LoginForm/LoginForm'
import TabBtn from '../../components/TabBtn/TabBtn'

export default function Login() {
  return (
    <S.Container>
      <S.Img src={logo} alt="로고" />
      <TabBtn />
      <LoginForm />
    </S.Container>
  )
}
