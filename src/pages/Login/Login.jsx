import React from 'react'
import * as S from './LoginSign.style'

import logo from '../../assets/icon/bigLogo.svg'
import LoginForm from '../../components/LoginSignForm/LoginForm'
import TabBtn from '../../components/TabBtn/TabBtn'

export default function Login() {
  return (
    <S.Container>
      <S.Img src={logo} alt="로고" />
      <TabBtn content={'로그인'} />
      <LoginForm />
      <S.Footer>
        <a href="/signup">회원가입</a>
        <a href="/">비밀번호 찾기</a>
      </S.Footer>
    </S.Container>
  )
}
