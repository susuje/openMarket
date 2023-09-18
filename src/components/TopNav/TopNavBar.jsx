import React, { useState } from 'react'
import * as S from './TopNavBar.style.js'
import { useNavigate } from 'react-router-dom'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  myUserName,
  userTokenState,
  userTypeState,
  isLoginState,
} from '../../atoms/Atoms.js'

import logo from '../../assets/icon/logo.svg'
import searchIcon from '../../assets/icon/search.svg'
import userIcon from '../../assets/icon/icon-user.svg'
import cartIcon from '../../assets/icon/icon-shopping-cart.svg'

export default function TopNavBar() {
  const userName = useRecoilValue(myUserName)
  const [showMenu, setShowMenu] = useState(false)
  const setIsLogin = useSetRecoilState(isLoginState)
  const setUserToken = useSetRecoilState(userTokenState)
  const setUserName = useSetRecoilState(myUserName)
  const setUserType = useSetRecoilState(userTypeState)
  const toggle = () => {
    setShowMenu(showMenu => !showMenu) // on,off 개념 boolean
  }
  const handleLogout = () => {
    setIsLogin(false)
    setUserToken('')
    setUserName('')
    setUserType('')
    navigate('/login')
  }

  const navigate = useNavigate()
  return (
    <S.Nav>
      <button>
        <img src={logo} alt="로고 이미지" />
      </button>
      <S.FlexBox>
        <S.SearchBtn>
          <img src={searchIcon} alt="검색 아이콘" />
        </S.SearchBtn>
        <S.UserBox>
          <S.UserBtn
            onClick={userName ? () => toggle() : () => navigate('/login')}
            className={userName ? (showMenu ? 'clicked' : 'unclicked') : null}
          >
            <img src={userIcon} alt="유저 아이콘" />
            {userName ? <p>{userName} 님</p> : <p>로그인</p>}
          </S.UserBtn>
          {userName && showMenu ? (
            <S.Ul>
              <li>
                <button>마이페이지</button>
              </li>
              <li className="second">
                <button>장바구니</button>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            </S.Ul>
          ) : null}
        </S.UserBox>
      </S.FlexBox>
    </S.Nav>
  )
}
//input 으로 맨처음부터 해야할듯. 돋보기를 button으로하고...
