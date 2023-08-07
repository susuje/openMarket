import React from 'react'
import * as S from './LoginSignForm.style'

export default function SignForm() {
  const phoneNums = ['010', '011', '016', '017', '018', '019']

  return (
    <S.Form>
      <S.Label htmlFor="id">아이디</S.Label>
      <S.IdContainer>
        <S.SignInput id="id" />
        <S.JoinBtn>중복확인</S.JoinBtn>
      </S.IdContainer>
      <S.Label htmlFor="pw">비밀번호</S.Label>
      <S.SignInput id="pw" className="unChecked" />
      <S.Label htmlFor="pwCheck">비밀번호 재확인</S.Label>
      <S.SignInput id="pwCheck" className="unChecked" />
      <S.Label htmlFor="username" style={{ marginTop: '50px' }}>
        이름
      </S.Label>
      <S.SignInput id="username" />
      <S.Label htmlFor="phone">휴대폰 번호</S.Label>
      <S.PhoneContainer>
        <S.SelectBar>
          {phoneNums.map((num, i) => {
            return <option>{num}</option>
          })}
        </S.SelectBar>
        <S.SignInput maxLength={'4'} />
        <S.SignInput maxLength={'4'} />
      </S.PhoneContainer>
    </S.Form>
  )
}
