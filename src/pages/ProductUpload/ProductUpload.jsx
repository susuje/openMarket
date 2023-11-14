import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { product_id, userTokenState } from '../../atoms/Atoms'

import * as S from './ProductUpload.style'

import CenterTopNav from '../../components/TopNav/CenterTopNav'
import NumberInput from '../../components/Product/NumberInput'
import Footer from '../../components/Footer/Footer'

import {
  uploadProduct,
  getProductDetail,
  modifyProductDetail,
} from '../../api/ProductApi'

export default function ProductUpload() {
  const navigate = useNavigate()
  const categories = [
    '가구',
    '홈데코',
    '문구',
    '악세사리',
    '패션',
    '신발',
    '음악',
    '화장품',
  ]
  const [parcelClicked, setParcelClicked] = useState(true)
  const [deliveryClicked, setDeliveryClicked] = useState(false)
  const [clickedIndex, setClickedIndex] = useState(0)
  const [previewImage, setPreviewImage] = useState(null)
  const [isSavedDisabled, setIsSavedDisabled] = useState(true)
  const imageInput = useRef(null)

  const UpdateProductId = useRecoilValue(product_id) //저장을 누르면 빈문자열이되도록
  const setProductId = useSetRecoilState(product_id)
  const [modifyProduct, setModifyProduct] = useState({})
  const token = useRecoilValue(userTokenState)
  const handleCategorieBtn = index => {
    setClickedIndex(index)
  }
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

    // 상품 수정시
    if (UpdateProductId) {
      getProductDetail(UpdateProductId).then(data => {
        setModifyProduct(data)
        //console.log(data, '수정상품')
        setPreviewImage(data.image)
        // setValue('image', data.image)
        setValue('product_name', data.product_name)
        setValue('shipping_method', data.shipping_method)
        setValue('price', data.price)
        setValue('product_info', JSON.parse(data.product_info)[1][0])

        //카테고리
        const index = categories.indexOf(JSON.parse(data.product_info)[0][0])
        setClickedIndex(index)

        setValue('stock', data.stock)
        setValue('shipping_fee', data.shipping_fee.toString())
      })
    }
  }, [])

  const { image } = getValues()
  const All = watch()
  useEffect(() => {
    const allInputFilled = Object.values(All).every(el => Boolean(el))
    // console.log(allInputFilled, Object.values(All))
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

  const ModifyProductMutation = useMutation(
    ({ token, UpdateProductId, ...data }) =>
      modifyProductDetail(token, UpdateProductId, data),
    {
      onSuccess(data) {
        window.alert('상품수정 성공')
        setProductId('')
        navigate(`/products/${UpdateProductId}`)
        console.log(data)
      },
      onError(error) {
        console.log(error)
      },
    }
  )

  //상품 업로드 또는 수정 submit
  const onSubmit = data => {
    //상품 수정할때랑 업로드할떄 달라야함.  UpdateProductId 있으면 수정API 없으면 밑에코드대로.
    const productData = {
      ...data,
      product_info: JSON.stringify([
        [categories[clickedIndex]],
        [data.product_info],
      ]),
      price: parseInt(data.price, 10),
      shipping_fee: parseInt(data.shipping_fee, 10),
    }
    console.log(productData)

    if (UpdateProductId) {
      //수정
      ModifyProductMutation.mutate({ token, UpdateProductId, ...productData })
    } else {
      //업로드
      UploadProductMutation.mutate({ token, ...productData })
    }
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
                      maxLength="20"
                      id="productName"
                      type="text"
                      {...register('product_name', {
                        required: '* 상품명은 필수 입력입니다.',
                      })}
                      defaultValue={
                        UpdateProductId ? modifyProduct.product_name : ''
                      }
                    />
                    <small>
                      {Object.values(All)[0] ? Object.values(All)[0].length : 0}
                      /20
                    </small>
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
                      defaultValue={modifyProduct ? modifyProduct.price : ''}
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
                      defaultValue={
                        modifyProduct ? modifyProduct.shipping_fee : ''
                      }
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
                      defaultValue={modifyProduct ? modifyProduct.stock : ''}
                    />
                  </S.InputBox>
                </S.ProductInfo>
              </S.GridDiv>
              <S.InputBox>
                <label htmlFor="categorie" className="categorie">
                  카테고리
                </label>
                {categories.map((el, index) => (
                  <S.CategorieBtn
                    type="button"
                    className={clickedIndex === index ? 'clicked' : ''}
                    onClick={() => handleCategorieBtn(index)}
                  >
                    {el}
                  </S.CategorieBtn>
                ))}
              </S.InputBox>
              <S.ProductDetail>
                <p>상품 상세 정보</p>
                {errors.product_info && (
                  <S.Error>{errors.product_info.message}</S.Error>
                )}
                <textarea
                  {...register('product_info', {
                    required: '* 상세정보는 필수 입력입니다.',
                  })}
                  defaultValue={modifyProduct ? modifyProduct.product_info : ''}
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
