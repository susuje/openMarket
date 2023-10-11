import React from 'react'

import * as S from './PageNationBtn.style'

export default function PageNationBtn() {
  return (
    <S.PageNation>
      <S.LeftBtn />
      <S.PageNumList className="active">1</S.PageNumList>
      <S.PageNumList>2</S.PageNumList>
      <S.PageNumList>3</S.PageNumList>
      <S.PageNumList>4</S.PageNumList>
      <S.RightBtn />
    </S.PageNation>
  )
}
