import React, { useEffect, useState } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postOrder } from '../../api/orderApi'
import { modifyIsActive } from '../../api/cartApi'
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../atoms/Atoms'
import * as S from './ShippingForm.style'
import TotalPayment from './TotalPayment'

export default function ShippingForm({
  totalPrice,
  totalFee,
  order_kind,
  product_id,
  count,
  cartItemId,
}) {
  // phone 010으로 바꿔야함
  const navigate = useNavigate()
  const token = useRecoilValue(userTokenState)
  const [payment, setPayment] = useState('')
  const [checkAgree, setCheckAgree] = useState(false)
  const [isJoinDisabled, setIsJoinDisabled] = useState(true)

  //react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const All = watch()

  useEffect(() => {
    const allInputFilled = Object.values(All).every(el => Boolean(el))

    if (allInputFilled && payment !== '' && checkAgree) {
      setIsJoinDisabled(false)
    } else {
      setIsJoinDisabled(true)
    }
  }, [All])

  const open = useDaumPostcodePopup(postcodeScriptUrl)

  const onCompletePost = data => {
    setValue('addressNum', data.zonecode)
    setValue('address1', data.roadAddress + ' (' + data.buildingName + ')')
  }
  const handleClick = () => open({ onComplete: onCompletePost })

  const blockTextInput = e => {
    //숫자만 입력할 수 있게끔
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1')
  }
  const handleSameBtn = () => {
    //주문자 정보 동일 버튼
    const nameValue = getValues('name')
    const Phone1 = getValues('myPhone1')
    const Phone2 = getValues('myPhone2')
    const Phone3 = getValues('myPhone3')
    setValue('receiver', nameValue)
    setValue('phone1', Phone1)
    setValue('phone2', Phone2)
    setValue('phone3', Phone3)
  }
  const handleRadioPayment = e => {
    setPayment(e.target.id)
  }
  const onSubmit = data => {
    data.order_kind = order_kind
    data.receiver_phone_number = data.myPhone1 + data.myPhone2 + data.myPhone3
    data.address = data.address1 + ' ' + data.address2
    data.total_price = totalPrice + totalFee
    data.payment_method = payment

    const propertiesToDelete = [
      'name',
      'email',
      'address1',
      'address2',
      'addressNum',
      'myPhone1',
      'myPhone2',
      'myPhone3',
      'phone1',
      'phone2',
      'phone3',
    ]
    propertiesToDelete.forEach(property => {
      delete data[property]
    })
    if (order_kind === 'cart_one_order' || order_kind === 'direct_order') {
      data.product_id = product_id[0]
      data.quantity = count[0]
    }
    if (order_kind === 'cart_one_order') {
      //is_active false일 경우를 방지하기위해
      modifyIsActive(token, cartItemId, {
        product_id: product_id[0],
        quantity: count[0],
        is_active: true,
      })
    }
    console.log(data)
    postOrder(token, data).then(data => {
      console.log(data)
      navigate('/orderDone')
    })
  }
  return (
    <>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.H2 className="ship">배송정보</S.H2>
        <S.Info>
          <h3>주문자 정보</h3>
          <S.InputWrapper width="334px">
            <label htmlFor="name">이름</label>
            <input
              id="name"
              {...register('name', {
                required: '* 필수 입력입니다.',
              })}
            />
            {errors.name && <p className="alert">{errors.name.message}</p>}
          </S.InputWrapper>
          <S.InputWrapper width="100px">
            <label htmlFor="phoneNum">휴대폰</label>
            <input
              id="phoneNum"
              className="first"
              maxLength={'3'}
              onInput={blockTextInput}
              {...register('myPhone1', {
                required: '* 필수 입력입니다.',
              })}
            />
            <p>-</p>
            <input
              id="phoneNum"
              maxLength={'4'}
              onInput={blockTextInput}
              {...register('myPhone2', {
                required: '* 필수 입력입니다.',
              })}
            />
            <p>-</p>
            <input
              id="phoneNum"
              maxLength={'4'}
              onInput={blockTextInput}
              {...register('myPhone3', {
                required: '* 필수 입력입니다.',
              })}
            />
          </S.InputWrapper>
          <S.InputWrapper width="334px">
            <label htmlFor="mail">이메일</label>
            <input
              id="mail"
              type="email"
              width="334px"
              {...register('email', {
                required: '* 필수 입력입니다.',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '* 이메일 형식에 맞춰 입력해주세요.',
                },
              })}
            />
            {errors.email && <p className="alert">{errors.email.message}</p>}
          </S.InputWrapper>
        </S.Info>
        <S.Info>
          <h3>배송지 정보</h3>
          <button
            className="sameInfo"
            type="button"
            onClick={() => handleSameBtn()}
          >
            주문자 정보와 동일
          </button>
          <S.InputWrapper width="334px">
            <label htmlFor="reciever">수령인</label>
            <input
              id="reciever"
              width="334px"
              {...register('receiver', {
                required: '* 필수 입력입니다.',
              })}
            />
            {errors.receiver && (
              <p className="alert">{errors.receiver.message}</p>
            )}
          </S.InputWrapper>
          <S.InputWrapper width="100px">
            <label htmlFor="phoneNum">휴대폰</label>
            <input
              id="phoneNum"
              className="first"
              maxLength={'3'}
              onInput={blockTextInput}
              {...register('phone1', {
                required: '* 필수 입력입니다.',
              })}
            />
            <p>-</p>
            <input
              id="phoneNum"
              maxLength={'4'}
              onInput={blockTextInput}
              {...register('phone2', {
                required: '* 필수 입력입니다.',
              })}
            />
            <p>-</p>
            <input
              id="phoneNum"
              maxLength={'4'}
              onInput={blockTextInput}
              {...register('phone3', {
                required: '* 필수 입력입니다.',
              })}
            />
          </S.InputWrapper>
          <S.InputWrapper width="170px">
            <label htmlFor="address">배송주소</label>
            <input
              id="address"
              placeholder="우편번호"
              {...register('addressNum', {
                required: '* 필수 입력입니다.',
              })}
              readOnly
            />
            <button onClick={handleClick}>우편번호 조회</button>
            <br />
            <input
              className="long"
              placeholder="주소"
              {...register('address1', {
                required: '* 필수 입력입니다.',
              })}
              readOnly
            />
            <br />
            <input
              className="long"
              placeholder="상세주소"
              {...register('address2', {
                required: '* 필수 입력입니다.',
              })}
            />
            {errors.address2 && (
              <>
                <br />
                <p
                  style={{ marginLeft: '170px', marginTop: '10px' }}
                  className="alert"
                >
                  {errors.address2.message}
                </p>
              </>
            )}
          </S.InputWrapper>
          <S.InputWrapper width="800px">
            <label htmlFor="message">배송 메세지</label>
            <input
              id="message"
              {...register('address_message', {
                required: '* 필수 입력입니다.',
              })}
            />
            {errors.address_message && (
              <>
                <br />
                <p
                  style={{ marginLeft: '170px', marginTop: '10px' }}
                  className="alert"
                >
                  {errors.address_message.message}
                </p>
              </>
            )}
          </S.InputWrapper>
        </S.Info>

        <S.FlexDiv>
          <S.Wrapper>
            <S.H2>결제수단</S.H2>
            <S.Payment>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="CARD"
                  onChange={e => handleRadioPayment(e)}
                />
                <label htmlFor="CARD">신용/체크카드</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="DEPOSIT"
                  onChange={e => handleRadioPayment(e)}
                />
                <label htmlFor="DEPOSIT">무통장 입금</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="PHONE_PAYMENT"
                  onChange={e => handleRadioPayment(e)}
                />
                <label htmlFor="PHONE_PAYMENT">휴대폰 결제</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="NAVERPAY"
                  onChange={e => handleRadioPayment(e)}
                />
                <label htmlFor="NAVERPAY">네이버페이</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="KAKAOPAY"
                  onChange={e => handleRadioPayment(e)}
                />
                <label htmlFor="KAKAOPAY">카카오페이</label>
              </div>
            </S.Payment>
          </S.Wrapper>
          <TotalPayment
            isJoinDisabled={isJoinDisabled}
            setCheckAgree={setCheckAgree}
            totalPrice={totalPrice}
            totalFee={totalFee}
          />
        </S.FlexDiv>
      </S.FormContainer>
    </>
  )
}
