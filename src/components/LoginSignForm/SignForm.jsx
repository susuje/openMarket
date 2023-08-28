import React, { useState } from 'react'
import * as S from './LoginSignForm.style'

export default function SignForm({ seller }) {
  const [clicked, setClicked] = useState(false)
  const [phoneNum, setPhoneNum] = useState('010')
  const toggle = () => {
    setClicked(clicked => !clicked) // on,off 개념 boolean
  }
  const phoneNums = ['010', '011', '016', '017', '018', '019']

  const closeDropdown = () => {
    if (clicked) setClicked(false)
  }

  document.addEventListener('click', () => {
    //console.log('doc이벤트실행')
    closeDropdown()
  })

  const handleSelectBarClick = event => {
    event.stopPropagation() // 안해주면 위 document.addEvent 코드가 실행되어 setClicked(false)가 됨.
    toggle()
  }

  const setNumber = e => {
    setPhoneNum(e.target.innerText) //phoneNum은 문자열임
  }
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
          onClick={handleSelectBarClick}
          className={clicked ? 'clicked' : null}
        >
          {phoneNum}
          <S.Ul className={clicked ? 'clicked' : null}>
            {phoneNums.map((num, i) => {
              return (
                <li>
                  <button type="button" onClick={setNumber}>
                    {num}
                  </button>
                </li>
              )
            })}
          </S.Ul>
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
