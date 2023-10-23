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
import userIcon from '../../assets/icon/icon-user.svg'
import cartIcon from '../../assets/icon/icon-shopping-cart.svg'

export default function TopNavBar({ userType }) {
  const userName = useRecoilValue(myUserName)
  const [showMenu, setShowMenu] = useState(false)
  const [typedInput, setTypedInput] = useState(false)

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
        <S.SearchBox>
          <S.SearchInput
            onChange={e =>
              e.target.value ? setTypedInput(true) : setTypedInput(false)
            }
            className={typedInput ? 'typed' : null}
          />
          <S.SearchBtn></S.SearchBtn>
        </S.SearchBox>
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
              {userType === 'BUYER' ? (
                <li className="second" onClick={() => navigate('/cart')}>
                  <button>장바구니</button>
                </li>
              ) : (
                <li className="second" onClick={() => navigate('/center')}>
                  <button>판매자 센터</button>
                </li>
              )}
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
