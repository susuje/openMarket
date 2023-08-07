import React from 'react'
import * as S from './LoginSignForm.style'

export default function LoginForm() {
  return (
    <S.Form>
      <S.LoginInput placeholder="아이디" />
      <S.LoginInput placeholder="비밀번호" />
      <S.Err>아이디 또는 비밀번호가 일치하지 않습니다.</S.Err>
      <S.CommonBtn>로그인</S.CommonBtn>
    </S.Form>
  )
}
