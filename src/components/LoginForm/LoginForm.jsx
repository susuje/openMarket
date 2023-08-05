import React from 'react'
import * as S from './LoginForm.style'

export default function LoginForm() {
  return (
    <S.LoginForm>
      <S.LoginInput placeholder="아이디" />
      <S.LoginInput placeholder="비밀번호" />
    </S.LoginForm>
  )
}
