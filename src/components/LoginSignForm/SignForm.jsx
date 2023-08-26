import React, { useState } from 'react'
import * as S from './LoginSignForm.style'

export default function SignForm({ seller }) {
  const [Clicked, isClicked] = useState(false)
  const toggle = () => {
    isClicked(Clicked => !Clicked) // on,off 개념 boolean
  }
  const phoneNums = ['010', '011', '016', '017', '018', '019']

  return (
    <S.Form>
      <S.Label htmlFor="id">아이디</S.Label>
      <S.FlexContainer>
        <S.SignInput id="id" />
        <S.Btn>중복확인</S.Btn>
      </S.FlexContainer>
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
        <S.SelectBar
          onClick={() => toggle()}
          className={Clicked ? 'clicked' : null}
        >
          010
          <ul>
            {/* {ul도 className Clicked 되지않을까?} */}
            {phoneNums.map((num, i) => {
              return (
                <li>
                  <button>{num}</button>
                </li>
              )
            })}
          </ul>
        </S.SelectBar>
        <S.SignInput maxLength={'4'} id="phone" />
        <S.SignInput maxLength={'4'} />
      </S.PhoneContainer>
      {seller ? (
        <>
          <S.Label htmlFor="businessNum" style={{ marginTop: '50px' }}>
            사업자 등록번호
          </S.Label>
          <S.FlexContainer>
            <S.SignInput id="businessNum" />
            <S.Btn>인증</S.Btn>
          </S.FlexContainer>
          <S.Label htmlFor="storeName">스토어 이름</S.Label>
          <S.SignInput id="storeName" />
        </>
      ) : null}
    </S.Form>
  )
}
