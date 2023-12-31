import React, { useEffect, useState } from 'react'

import * as S from './ProductDetail.style'
import TopNavBar from '../../components/TopNav/TopNavBar'
import DetailTab from '../../components/Product/DetailTab'
import Footer from '../../components/Footer/Footer'

//import sampleImg from '../../assets/img/voyage.jpg'
import DetailAmountBtn from '../../components/Product/DetailAmountBtn'
import PutCartModal from '../../components/Modal/PutCartModal'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userTypeState, userTokenState } from '../../atoms/Atoms'
import { getProductDetail } from '../../api/ProductApi'
import { putCartProduct } from '../../api/cartApi'

export default function ProductDetail() {
  //스크롤 항상 맨위에 있게해야함
  //DetailAmountBtn 하기 10-30
  const navigate = useNavigate()
  const userType = useRecoilValue(userTypeState)
  const token = useRecoilValue(userTokenState)
  const { product_id } = useParams()
  const [productDetail, setProductDetail] = useState({})
  const [count, setCount] = useState(1)
  const [info, setInfo] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tabClicked, setTabClicked] = useState('제품 상세')
  //모달창 오픈시 스크롤 방지
  useEffect(() => {
    console.log('ㅎㅇ1')
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const handleDirectOrder = () => {
    if (userType === 'BUYER') {
      navigate('/payment', {
        state: {
          product_id: [productDetail.product_id],
          count: [count],
          order_kind: 'direct_order',
        },
      })
    } else {
      window.alert('BUYER만 구입할 수 있습니다')
    }
  }
  const handleClickCart = () => {
    if (userType === 'BUYER') {
      console.log('클릭')
      const data = {
        product_id: product_id,
        quantity: count,
        check: true,
      }
      //console.log(data)

      putCartProduct(token, data)
        .then(data => {
          console.log(data)
          setIsModalOpen(true)
        })
        .catch(error => {
          window.alert(error.response.data.FAIL_message) // 실패
        })
    } else {
      window.alert('BUYER만 이용할 수 있습니다')
    }
  }

  useEffect(() => {
    console.log('ㅎㅇ2')
    getProductDetail(product_id).then(data => {
      setProductDetail(data)
      //console.log(data)

      try {
        if (JSON.parse(data.product_info).length === 2) {
          //카테코리 있을경우
          setInfo(JSON.parse(data.product_info)[1][0])
        }
      } catch (e) {
        //카테코리 없을경우
        setInfo(data.product_info)
      }
    })
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <TopNavBar userType={userType} />
      {isModalOpen ? <PutCartModal setIsModalOpen={setIsModalOpen} /> : null}
      <S.Container>
        <S.Img
          src={productDetail.image}
          className={productDetail.stock === 0 ? 'soldout' : null}
        />

        <S.InfoWrapper>
          <p>{productDetail.store_name}</p>
          <S.ProductName>
            {productDetail.stock === 0
              ? productDetail.product_name + ' << SOLD OUT >>'
              : productDetail.product_name}
          </S.ProductName>
          <p className="won">
            <S.Price>
              {productDetail.price !== undefined && productDetail.price !== null
                ? productDetail.price.toLocaleString()
                : ''}
            </S.Price>
            원
          </p>
          <p className="ship">
            {productDetail.shipping_method === 'PARCEL' ? '택배' : '직접'}배송 /
            {productDetail.shipping_fee !== undefined &&
            productDetail.shipping_fee !== null
              ? productDetail.shipping_fee === 0
                ? ' 무료배송'
                : ` 배송비 ${productDetail.shipping_fee.toLocaleString()} 원`
              : ''}
          </p>
          <S.Div>
            <DetailAmountBtn
              count={count}
              setCount={setCount}
              stock={productDetail.stock}
            />
          </S.Div>
          <S.TotalPriceDiv>
            <p>총 상품 금액</p>
            <div>
              <p>
                총 수량 <span>{count}</span>개
              </p>
              <p>|</p>
              <strong>
                <S.Price>
                  {(count * productDetail.price).toLocaleString()}
                </S.Price>
                원
              </strong>
            </div>
          </S.TotalPriceDiv>
          <S.Btns>
            <S.Btn
              onClick={() => {
                handleDirectOrder()
              }}
              disabled={productDetail.stock === 0 ? true : false}
            >
              바로 구매
            </S.Btn>
            <S.Btn
              className="cart"
              onClick={() => {
                handleClickCart()
              }}
              disabled={productDetail.stock === 0 ? true : false}
            >
              장바구니
            </S.Btn>
          </S.Btns>
        </S.InfoWrapper>
      </S.Container>
      <DetailTab setTabClicked={setTabClicked} tabClicked={tabClicked} />
      <S.Content>
        {tabClicked === '제품 상세' ? info : tabClicked + '는 준비중입니다.'}
      </S.Content>
      <Footer />
    </>
  )
}
