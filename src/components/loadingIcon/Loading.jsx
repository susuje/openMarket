import React from 'react'
import * as S from './Loading.style'
import loadingGif from '../../assets/img/loading.gif'
export default function Loading() {
  return (
    <S.Wrapper>
      <img src={loadingGif} alt="로딩아이콘" />
    </S.Wrapper>
  )
}
