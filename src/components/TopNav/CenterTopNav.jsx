import React from 'react'
import * as S from './CenterTopNav.style'
import logo from '../../assets/icon/logo.svg'
export default function CenterTopNav() {
  return (
    <S.Nav>
      <S.Left>
        <button>
          <img src={logo} alt="플레이랩 로고" />
        </button>
        <h1>판매자 센터</h1>
      </S.Left>
    </S.Nav>
  )
}
