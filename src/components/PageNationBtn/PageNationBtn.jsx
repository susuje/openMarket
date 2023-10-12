import React, { useState, useEffect } from 'react'

import * as S from './PageNationBtn.style'

export default function PageNationBtn({ pageNum, setPageNum, allPages }) {
  //pageList만들어서 map으로 해주기..?
  const [disabledLeft, setDisabledLeft] = useState(true)
  const [disabledRight, setDisabledRight] = useState(false)
  useEffect(() => {
    if (pageNum !== 1) {
      setDisabledLeft(false)
    } else {
      setDisabledLeft(true)
    }

    if (allPages !== 1 && allPages === pageNum) {
      setDisabledRight(true)
    } else {
      setDisabledRight(false)
    }
  }, [pageNum])
  const handlePage = num => {
    setPageNum(num)
  }
  return (
    <S.PageNation>
      <S.LeftBtn
        disabled={disabledLeft}
        className={disabledLeft ? 'disabled' : null}
        onClick={() => handlePage(pageNum - 1)}
      />
      {Array.from({ length: allPages }, (v, i) => i + 1).map(item => (
        <S.PageNumList
          onClick={() => {
            setPageNum(item)
          }}
          className={pageNum === item ? 'active' : null}
        >
          {item}
        </S.PageNumList>
      ))}
      <S.RightBtn
        disabled={disabledRight}
        className={disabledRight ? 'disabled' : null}
        onClick={() => handlePage(pageNum + 1)}
      />
    </S.PageNation>
  )
}
