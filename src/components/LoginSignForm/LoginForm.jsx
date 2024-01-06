import React, { useState } from 'react'
import * as S from './LoginSignForm.style'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { login } from '../../api/logInOutApi'
import { useSetRecoilState } from 'recoil'
import {
  userTokenState,
  isLoginState,
  userTypeState,
  myUserName,
} from '../../atoms/Atoms'

export default function LoginForm({ IsBuyer }) {
  //IsBuyer ? 구매회원로그인true : 판매회원로그인false
  //   {
  // 		"username": String,
  // 		"password": String,
  // 		"login_type": String // BUYER : 일반 구매자, SELLER : 판매자
  // }
  const [errorM, setErrorM] = useState('')
  const setUserToken = useSetRecoilState(userTokenState) // 사용자 토큰 상태 설정
  const setIsLoginState = useSetRecoilState(isLoginState) // 로그인 상태 설정
  const setUserName = useSetRecoilState(myUserName) // 아이디  설정
  const setUserTypeState = useSetRecoilState(userTypeState) // 구매or판매자 상태 설정

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({ mode: 'onChange' })

  const LoginMutation = useMutation(login, {
    onSuccess(data) {
      setIsLoginState(true)
      setUserToken(data.token)
      setUserTypeState(data.user_type)
      navigate('/')
    },
    onError(error) {
      setErrorM(error.response.data.FAIL_Message)
    },
  })

  const onSubmit = data => {
    //console.log(data)
    data.login_type = IsBuyer ? 'BUYER' : 'SELLER'
    LoginMutation.mutate(data)
    setUserName(data.username)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.LoginInput
        placeholder="아이디"
        type="text"
        {...register('username', {
          required: '* 아이디는 필수 입력입니다.',
        })}
      />
      <S.LoginInput
        placeholder="비밀번호"
        type="password"
        {...register('password', {
          required: '* 비밀번호는 필수 입력입니다.',
        })}
      />
      <S.Err>{errorM}</S.Err>
      <S.CommonBtn>로그인</S.CommonBtn>
    </S.Form>
  )
}
