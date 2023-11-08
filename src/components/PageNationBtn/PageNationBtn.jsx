import React, { useState, useEffect } from 'react'

import * as S from './PageNationBtn.style'

export default function PageNationBtn({
  pageNum,
  setPageNum,
  allPages,
  categoriesProductsLength,
}) {
  const [disabledLeft, setDisabledLeft] = useState(true)
  const [disabledRight, setDisabledRight] = useState(false)
  const [pagesArr, setPagesArr] = useState([])
  useEffect(() => {
    if (allPages < 5) {
      setPagesArr(Array.from({ length: allPages }, (v, i) => i + 1))
    } else {
      setPagesArr(Array.from({ length: 5 }, (v, i) => i + 1)) //[1,2,3,4,5]
    }
    console.log(allPages, 'allPages')
  }, [allPages])

  useEffect(() => {
    console.log(pageNum, 'pageNum')

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
        onClick={() => {
          if (pageNum % 5 === 1) {
            //pageNum이 11이면 6,7,8,9,10 이 떠야함. num은 1 /
            //pageNum이 6이면 1,2,3,4,5 이 떠야함. num은 0
            const num = Math.floor(pageNum / 5) - 1
            setPagesArr(Array.from({ length: 5 }, (v, i) => 5 * num + (i + 1)))
          }
          handlePage(pageNum - 1)
        }}
      />
      {pagesArr.map(item => (
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
        onClick={() => {
          if (pageNum % 5 === 0 && allPages > pageNum) {
            const num = Math.floor(pageNum / 5)
            console.log(allPages - pageNum)
            if (allPages - pageNum > 5) {
              setPagesArr(
                Array.from({ length: 5 }, (v, i) => 5 * num + (i + 1))
              )
            } else {
              setPagesArr(
                Array.from(
                  { length: allPages - pageNum },
                  (v, i) => 5 * num + (i + 1)
                )
              )
            }
            //pageNum이 5이면 6,7, 이 떠야함.
            //pageNum이 10이면 11,12,13 이 떠야함.
          }
          handlePage(pageNum + 1)
        }}
      />
    </S.PageNation>
  )
}
