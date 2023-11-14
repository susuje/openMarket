import React, { useState } from 'react'
import * as SC from '../Login/LoginSign.style'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/icon/bigLogo.svg'
import TabBtn from '../../components/TabBtn/TabBtn'
import SignForm from '../../components/LoginSignForm/SignForm'

export default function SignUp() {
  const navigate = useNavigate()
  const [IsBuyer, setIsBuyer] = useState(true)
  return (
    <SC.Container>
      <SC.Img src={logo} alt="로고" onClick={() => navigate('/')} />
      <TabBtn content={'가입'} setIsBuyer={setIsBuyer} IsBuyer={IsBuyer} />
      <SignForm IsBuyer={IsBuyer} />
    </SC.Container>
  )
}
