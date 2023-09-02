import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './LoginSignForm.style'

export default function SignForm({ seller }) {
  const [clicked, setClicked] = useState(false)
  const [phoneNum, setPhoneNum] = useState('010')
  const toggle = () => {
    setClicked(clicked => !clicked) // on,off 개념 boolean
  }

  //react-hook-form
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    console.log(data)
  }

  const Regex = {
    email: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
    id: /^[A-Za-z0-9]{3,20}$/, //20자 이내의 영어 소+대문자, 숫자 가능
    pw: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/, //8자, 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용
  }

  //phoneNums
  const phoneNums = ['010', '011', '016', '017', '018', '019']
  const handleMaxLength = e => {
    console.log(e.target.value)
    // if (e.target.value.length > 4) {
    //   e.target.value = e.target.value.slice(0, 4)
    // }
    if (e.target.value.length > 4 || !/^\d*$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, 4)
    }
    setValue(e.target.name, e.target.value)
  }

  const blockTextInput = e => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1')
  }
  const closeDropdown = () => {
    if (clicked) setClicked(false)
  }

  document.addEventListener('click', () => {
    //console.log('doc이벤트실행')
    closeDropdown()
  })

  const handleSelectBarClick = event => {
    event.stopPropagation() // 안해주면 위 document.addEvent 코드가 실행되어 setClicked(false)가 됨.
    toggle()
  }

  const setNumber = e => {
    setPhoneNum(e.target.innerText) //phoneNum은 문자열임
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label htmlFor="id">아이디</S.Label>
      <S.FlexContainer>
        <S.SignInput
          id="id"
          type="text"
          {...register('id', {
            required: '* 아이디는 필수 입력입니다.',
            pattern: {
              //정규식
              value: Regex.id,
              message:
                '* 20자 이내의 영어 대소문자 및 숫자를 포함한 아이디를 입력하세요.',
            },
          })}
        />
        <S.Btn>중복확인</S.Btn>
      </S.FlexContainer>
      {errors.id && <p className="alert">{errors.id.message}</p>}
      <S.Label htmlFor="pw">비밀번호</S.Label>
      <S.SignInput
        id="pw"
        className="unChecked"
        type="password"
        {...register('pw', {
          required: '* 비밀번호는 필수 입력입니다.',
          pattern: {
            value: Regex.pw,
            message: '* 8자 이상의 영어,숫자,특수기호를 조합해주세요.',
          },
        })}
      />
      {errors.pw && <p className="alert">{errors.pw.message}</p>}
      <S.Label htmlFor="pwCheck">비밀번호 재확인</S.Label>
      <S.SignInput
        id="pwCheck"
        className="unChecked"
        type="password"
        {...register('pwCheck', {
          required: '* 비밀번호를 한번 더 입력해주세요.',
          validate: value => {
            const { pw } = getValues()
            return pw === value || '비밀번호가 일치하지 않습니다'
          },
        })}
      />
      {errors.pwCheck && <p className="alert">{errors.pwCheck.message}</p>}
      <S.Label htmlFor="nickname" style={{ marginTop: '50px' }}>
        이름
      </S.Label>
      <S.SignInput
        id="nickname"
        {...register('nickname', {
          required: '* 이름은 필수 입력입니다.',
        })}
      />
      {errors.nickname && <p className="alert">{errors.nickname.message}</p>}
      <S.Label htmlFor="phone">휴대폰 번호</S.Label>
      <S.PhoneContainer>
        <S.SelectBar
          onClick={handleSelectBarClick}
          className={clicked ? 'clicked' : null}
        >
          {phoneNum}
          <S.Ul className={clicked ? 'clicked' : null}>
            {phoneNums.map((num, i) => {
              return (
                <li>
                  <button type="button" onClick={setNumber}>
                    {num}
                  </button>
                </li>
              )
            })}
          </S.Ul>
        </S.SelectBar>
        <S.SignInput
          type="text"
          maxLength={'4'}
          id="phone1"
          onChange={handleMaxLength}
          onInput={blockTextInput}
          {...register('phone1', {
            required: '* 필수 입력입니다.',
            pattern: {
              value: /^[0-9]{4}$/,
              message: '* 숫자를 입력해주세요.',
            },
          })}
        />
        <S.SignInput
          type="text"
          maxLength={'4'}
          id="phone2"
          onChange={handleMaxLength}
          onInput={blockTextInput}
          {...register('phone2', {
            required: '* 필수 입력입니다.',
            pattern: {
              value: /^[0-9]{4}$/,
              message: '* 숫자를 입력해주세요.',
            },
          })}
        />
      </S.PhoneContainer>
      {errors.phone1 ? (
        <p className="alert">{errors.phone1.message}</p>
      ) : null || errors.phone2 ? (
        <p className="alert">{errors.phone2.message}</p>
      ) : null}

      {seller ? (
        <>
          <S.Label htmlFor="businessNum" style={{ marginTop: '50px' }}>
            사업자 등록번호
          </S.Label>
          <S.FlexContainer>
            <S.SignInput id="businessNum" />
            <S.Btn>인증</S.Btn>
          </S.FlexContainer>
          <S.Label htmlFor="storeName">스토어 이름</S.Label>
          <S.SignInput id="storeName" />
        </>
      ) : null}
      <S.CheckDiv>
        <S.CheckInput type="checkbox" />
        <S.P>
          플레이랩의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에
          대한 내용을 확인하였고 동의합니다.
        </S.P>
      </S.CheckDiv>
      <S.JoinBtn>가입하기</S.JoinBtn>
    </S.Form>
  )
}
