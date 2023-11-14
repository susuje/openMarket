import React from 'react'
import * as S from './CenterTopNav.style'
import logo from '../../assets/icon/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function CenterTopNav() {
  const navigate = useNavigate()
  return (
    <S.Nav>
      <S.Left>
        <button>
          <img src={logo} alt="플레이랩 로고" onClick={() => navigate('/')} />
        </button>
        <h1 onClick={() => navigate('/center')}>판매자 센터</h1>
      </S.Left>
    </S.Nav>
  )
}
