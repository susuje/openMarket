import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { product_id } from '../../atoms/Atoms'
import * as S from './ProductCard.style'

//import img from '../../assets/img/glass.jpg'
import Modal from '../Modal/Modal'

export default function ProductCard({ product }) {
  const setProductId = useSetRecoilState(product_id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  //모달창 오픈시 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      {isModalOpen ? (
        <Modal productId={product.product_id} setIsModalOpen={setIsModalOpen} />
      ) : null}
      <S.Wrapper>
        <S.ProductInfo>
          <img src={product.image} alt="상품 이미지" />
          <S.NameStock>
            <h3>{product.product_name}</h3>
            <p>재고 : {product.stock}개</p>
          </S.NameStock>
        </S.ProductInfo>
        <S.Price>{product.price.toLocaleString()} 원</S.Price>
        <S.Btn
          className="modify"
          onClick={() => {
            setProductId(product.product_id)
            navigate('/productUpload')
          }}
        >
          수정
        </S.Btn>
        <S.Btn
          className="delete"
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          삭제
        </S.Btn>
      </S.Wrapper>
    </>
  )
}
