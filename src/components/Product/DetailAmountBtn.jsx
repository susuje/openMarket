import React, { useEffect } from 'react'
import * as S from './AmountBtn.style'

const DetailAmountBtn = React.memo(function DetailAmountBtn({
  count,
  setCount,
  stock,
}) {
  const handleAmountClick = e => {
    if (e.target.children[0].innerHTML === '+') {
      setCount(count => count + 1)
    } else {
      setCount(count => count - 1)
    }
  }

  return (
    <S.CountDiv>
      <S.CountBtn
        disabled={count === 1 ? true : false}
        onClick={e => handleAmountClick(e)}
      >
        <span className="visually-hidden">-</span>
      </S.CountBtn>
      <S.Num>{count}</S.Num>
      <S.CountBtn
        className="right"
        disabled={stock === count || stock === 0 ? true : false}
        onClick={e => handleAmountClick(e)}
      >
        <span className="visually-hidden">+</span>
      </S.CountBtn>
    </S.CountDiv>
  )
})

export default DetailAmountBtn
