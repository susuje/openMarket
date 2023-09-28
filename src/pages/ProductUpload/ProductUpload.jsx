import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../atoms/Atoms'

import * as S from './ProductUpload.style'

import CenterTopNav from '../../components/TopNav/CenterTopNav'
import NumberInput from '../../components/Product/NumberInput'
import Footer from '../../components/Footer/Footer'

import { uploadProduct } from '../../api/ProductApi'

export default function ProductUpload() {
  const navigate = useNavigate()
  const [parcelClicked, setParcelClicked] = useState(true)
  const [deliveryClicked, setDeliveryClicked] = useState(false)
  const [uploadImage, setUploadImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [isSavedDisabled, setIsSavedDisabled] = useState(true)
  const imageInput = useRef(null)

  const token = useRecoilValue(userTokenState)

  //react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  useEffect(() => {
    setValue('shipping_method', 'PARCEL')
  }, [])

  const { image } = getValues()
  const All = watch()
  useEffect(() => {
    const allInputFilled = Object.values(All).every(el => Boolean(el))

    if (allInputFilled) {
      setIsSavedDisabled(false)
    } else {
      setIsSavedDisabled(true)
    }
  }, [image, All])

  const handleImage = () => {
    imageInput.current.click()
  }

  const handleImageChange = e => {
    //이부분 다시보기
    console.log('이미지선택')
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewImage(reader.result)
    }
    //setUploadImage(file)
    setValue('image', file)
  }

  //배송방법 버튼
  const handleShipping = e => {
    e.stopPropagation()
    if (e.target.innerText.includes('택배')) {
      setValue('shipping_method', 'PARCEL')
      setDeliveryClicked(false)
      setParcelClicked(true)
    } else {
      setValue('shipping_method', 'DELIVERY')
      setParcelClicked(false)
      setDeliveryClicked(true)
    }
  }

  const blockTextInput = e => {
    //숫자만 입력할 수 있게끔
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1')
  }

  const UploadProductMutation = useMutation(
    ({ token, ...data }) => uploadProduct(token, data),
    {
      onSuccess(data) {
        window.alert('상품업로드 성공!')
        console.log(data)
        navigate('/center')
      },
      onError(error) {
        console.log(error)
      },
    }
  )

  //회원가입버튼 submit // 9.22 이제 이부분해얗ㅁ
  const onSubmit = data => {
    //shipping 또는 image가 빈문자열이면, 예외처리해줘야함

    const productData = {
      ...data,
      price: parseInt(data.price, 10),
      shipping_fee: parseInt(data.shipping_fee, 10),
    }

    console.log(productData)

    UploadProductMutation.mutate({ token, ...productData })
  }

  return (
    <>
      <CenterTopNav />
      <S.Wrapper>
        <S.Container>
          <S.H1>상품 등록</S.H1>
          <S.FlexDiv>
            <S.Caution>
              <h4>*상품 등록 주의사항</h4>
              <div>
                <p>- 터무니없는 금액은 올리지 말아주세요.</p>
                <p>
                  - 부적절한 상품이미지 혹은 내용이 업로드 되었을시 상품 강제
                  삭제 및 경고 조치를 받을 수 있습니다.
                </p>
              </div>
            </S.Caution>
            <S.UploadForm onSubmit={handleSubmit(onSubmit)}>
              <S.GridDiv>
                <S.ImageDiv>
                  <label htmlFor="image">상품 이미지</label>
                  <S.ProductImg $previewImage={previewImage}>
                    <input
                      id="image"
                      type="file"
                      accept=".jpg, .gif, .png"
                      ref={imageInput}
                      onChange={handleImageChange}
                    />
                    <S.ImgUploadBtn type="button" onClick={handleImage} />
                  </S.ProductImg>
                </S.ImageDiv>
                <S.ProductInfo>
                  <S.InputBox>
                    <label htmlFor="productName">상품명</label>
                    {errors.product_name && (
                      <S.Error>{errors.product_name.message}</S.Error>
                    )}
                    <S.NameInput
                      maxLength="30"
                      id="productName"
                      type="text"
                      {...register('product_name', {
                        required: '* 상품명은 필수 입력입니다.',
                      })}
                    />
                    <small>0/30</small>
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="price">판매가</label>
                    {errors.price && <S.Error>{errors.price.message}</S.Error>}
                    <NumberInput
                      unit="원"
                      id="price"
                      type="text"
                      onInput={blockTextInput}
                      register={register('price', {
                        required: '* 판매가는 필수 입력입니다.',
                      })}
                    />
                  </S.InputBox>
                  <S.InputBox>
                    <label>배송방법</label>
                    <div>
                      <S.ShipBtn
                        className={parcelClicked ? 'active' : null}
                        onClick={e => handleShipping(e)}
                        type="button"
                      >
                        택배, 소포, 등기
                      </S.ShipBtn>
                      <S.ShipBtn
                        className={deliveryClicked ? 'active' : null}
                        onClick={e => handleShipping(e)}
                        type="button"
                      >
                        직접배송(화물배달)
                      </S.ShipBtn>
                    </div>
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="ship">기본 배송비</label>
                    {errors.shipping_fee && (
                      <S.Error>{errors.shipping_fee.message}</S.Error>
                    )}
                    <NumberInput
                      unit="원"
                      id="ship"
                      type="text"
                      onInput={blockTextInput}
                      register={register('shipping_fee', {
                        required: '* 배송비는 필수 입력입니다.',
                      })}
                    />
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="stock">재고</label>
                    {errors.stock && <S.Error>{errors.stock.message}</S.Error>}
                    <NumberInput
                      unit="개"
                      id="stock"
                      type="text"
                      onInput={blockTextInput}
                      register={register('stock', {
                        required: '* 재고는 필수 입력입니다.',
                      })}
                    />
                  </S.InputBox>
                </S.ProductInfo>
              </S.GridDiv>
              <S.ProductDetail>
                <p>상품 상세 정보</p>
                {errors.product_info && (
                  <S.Error>{errors.product_info.message}</S.Error>
                )}
                <textarea
                  {...register('product_info', {
                    required: '* 상세정보는 필수 입력입니다.',
                  })}
                ></textarea>
              </S.ProductDetail>
              <S.Btns>
                <S.CancelBtn>취소</S.CancelBtn>
                <S.UploadBtn
                  type="submit"
                  disabled={isSavedDisabled}
                  className={isSavedDisabled ? 'disabled' : 'abled'}
                >
                  저장하기
                </S.UploadBtn>
              </S.Btns>
            </S.UploadForm>
          </S.FlexDiv>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
}
//input 숫자만 받게 해야함
//배송 버튼 toggle 리액트
