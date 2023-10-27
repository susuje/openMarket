import React, { useEffect, useState } from 'react'
import * as S from './DeleteProductBtn.style'

import Modal from '../Modal/Modal'

export default function DeleteProductBtn({
  checkedProducts,
  fetchCartList,
  setCheckedProducts,
  setTotalPrice,
  setTotalFee,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    //모달오픈시 스크롤못하게
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      {isModalOpen ? (
        <Modal
          checkedProducts={checkedProducts}
          setIsModalOpen={setIsModalOpen}
          content={'선택된 상품'}
          fetchCartList={fetchCartList}
          setCheckedProducts={setCheckedProducts}
          setTotalPrice={setTotalPrice}
          setTotalFee={setTotalFee}
        />
      ) : null}
      <S.Button
        onClick={() => {
          setIsModalOpen(true)
        }}
      >
        선택상품 삭제
      </S.Button>
    </>
  )
}
