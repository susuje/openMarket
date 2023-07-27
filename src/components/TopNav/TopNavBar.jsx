import React from 'react'
import * as S from './TopNavBar.style.js'
import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search.svg'
import cartIcon from '../../assets/icon/icon-shopping-cart.svg'
export default function TopNavBar() {
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
          <img src={cartIcon} alt="카트 아이콘" />
        </S.CartBtn>
      </div>
    </S.Nav>
  )
}
