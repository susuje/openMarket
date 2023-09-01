import React, { useState } from 'react'
import * as SC from '../Login/LoginSign.style'

import logo from '../../assets/icon/bigLogo.svg'
import TabBtn from '../../components/TabBtn/TabBtn'
import SignForm from '../../components/LoginSignForm/SignForm'

export default function SignUp() {
  const [IsBuyer, setIsBuyer] = useState(true)
  return (
    <SC.Container>
      <SC.Img src={logo} alt="로고" />
      <TabBtn content={'가입'} setIsBuyer={setIsBuyer} IsBuyer={IsBuyer} />
      {IsBuyer ? <SignForm /> : <SignForm seller="true" />}
    </SC.Container>
  )
}
