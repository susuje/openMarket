import React from 'react'
import * as S from './TopNavBar.style.js'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search.svg'
import userIcon from '../../assets/icon/icon-user.svg'
import cartIcon from '../../assets/icon/icon-shopping-cart.svg'

export default function TopNavBar() {
  const navigate = useNavigate()
  return (
    <S.Nav>
      <button>
        <img src={logo} alt="로고 이미지" />
      </button>
      <div>
        <S.SearchBtn>
          <img src={searchIcon} alt="검색 아이콘" />
        </S.SearchBtn>
        <S.CartBtn>
          <img
            src={userIcon}
            alt="유저 아이콘"
            onClick={() => navigate('/login')}
          />
        </S.CartBtn>
      </div>
    </S.Nav>
  )
}
//input 으로 맨처음부터 해야할듯. 돋보기를 button으로하고...
