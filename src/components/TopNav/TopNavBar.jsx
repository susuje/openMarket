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
//import cartIcon from '../../assets/icon/icon-shopping-cart.svg'

export default function TopNavBar({ userType }) {
  const navigate = useNavigate()
  const userName = useRecoilValue(myUserName)
  const [showMenu, setShowMenu] = useState(false)
  const [typedInput, setTypedInput] = useState(false)
  const [searchTxt, setSearchTxt] = useState('')

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
  const handleSearch = () => {
    navigate(`/search/${searchTxt}`, {
      state: {
        searchTxt: searchTxt,
      },
    })
  }
  return (
    <S.Nav>
      <S.CenterNav>
        <button>
          <img src={logo} alt="로고 이미지" onClick={() => navigate('/')} />
        </button>
        <S.FlexBox>
          <S.SearchBox>
            <S.SearchInput
              onChange={e => {
                if (e.target.value) {
                  setTypedInput(true)
                  setSearchTxt(e.target.value)
                } else {
                  setTypedInput(false)
                }
              }}
              className={typedInput ? 'typed' : null}
            />
            <S.SearchBtn
              onClick={() => handleSearch()}
              disabled={typedInput ? false : true}
            ></S.SearchBtn>
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
                {userType === 'BUYER' && (
                  <li onClick={() => navigate('/mypage')}>
                    <button>마이페이지</button>
                  </li>
                )}
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
      </S.CenterNav>
    </S.Nav>
  )
}
//input 으로 맨처음부터 해야할듯. 돋보기를 button으로하고...
