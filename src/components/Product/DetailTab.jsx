import React, { useState } from 'react'

import * as S from './DetailTab.style'

export default function DetailTab({ tabClicked, setTabClicked }) {
  const menus = ['제품 상세', '리뷰', 'Q&A', '반품/교환정보']
  const handleClick = e => {
    setTabClicked(e.target.innerText)
  }

  return (
    <S.Tab>
      {menus.map(txt => (
        <S.Btn
          className={tabClicked === txt ? 'active' : null}
          onClick={e => handleClick(e)}
        >
          {txt}
        </S.Btn>
      ))}
    </S.Tab>
  )
}

/* <S.Btn className="active">제품 상세</S.Btn>
<S.Btn>리뷰</S.Btn>
<S.Btn>Q&A</S.Btn>
<S.Btn>반품/교환정보</S.Btn> */
