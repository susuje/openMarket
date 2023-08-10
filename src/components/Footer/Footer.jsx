import React from 'react'
import * as S from './Footer.style'

import insta from '../../assets/icon/icon-insta.svg'
import youtube from '../../assets/icon/icon-yt.svg'
import facebook from '../../assets/icon/icon-fb.svg'

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.TopWrapper>
          <S.InfoUl>
            <li>플레이랩 소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>전자금융거래약관</li>
            <li>청소년보호정책</li>
            <li>제휴문의</li>
          </S.InfoUl>
          <S.SnsUl>
            <li>
              <img src={insta} alt="인스타" />
            </li>
            <li>
              <img src={youtube} alt="유튜브" />
            </li>
            <li>
              <img src={facebook} alt="페이스북 " />
            </li>
          </S.SnsUl>
        </S.TopWrapper>
        <p>
          <span>(주)PLAY LAB</span>
          <br />
          서울특별시 용산구 한남대로 111-11 플레이랩
          <br />
          사업자 번호 : 777-7777-7777 | 통신판매업
          <br />
          대표 : 크롱
        </p>
      </S.Container>
    </S.Footer>
  )
}
