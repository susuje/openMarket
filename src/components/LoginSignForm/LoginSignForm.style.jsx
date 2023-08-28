import styled from 'styled-components'

import checked from '../../assets/icon/signUp-valid.svg'
import unChecked from '../../assets/icon/icon-check-off.svg'
import upArrow from '../../assets/icon/icon-up-arrow.svg'
import downArrow from '../../assets/icon/icon-down-arrow.svg'

export const Form = styled.form`
  width: 550px;
  padding: 35px;
  border: 1px solid var(--grey-border);
  border-radius: 10px;
  margin-top: -18px;
  position: relative;
  z-index: 10;
  background-color: white;
`

export const LoginInput = styled.input`
  width: 100%;
  border-bottom: 1px solid var(--grey-border);
  padding: 20px 0px;
  &:first-child {
    margin-bottom: 6px;
  }
`
export const CommonBtn = styled.button`
  margin-top: 36px;
  color: white;
  border-radius: 5px;
  width: 100%;
  background-color: #000000;
  height: 60px;
`
export const Err = styled.p`
  color: red;
  text-align: left;
  font-size: 16px;
  margin-top: 26px;
  font-weight: 500;
`

/////// 회원가입 sign
export const Label = styled.label`
  color: #767676;
  font-size: 16px;
  text-align: left;
  display: block; //이걸 해줘야 text-align: left 적용됨.
  margin-bottom: 10px;
`

export const SignInput = styled.input`
  width: 100%;
  border: 1px solid var(--grey-border);
  height: 54px;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 0 16px;

  &:first-child {
    width: 346px;
  }
  :focus {
    border: 1px solid #000000;
  }
  &.unChecked {
    background: url(${unChecked}) 435px center no-repeat;
  }
`
export const Btn = styled.button`
  color: white;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 12px;
  font-weight: 500;
  width: 122px;
  background-color: #000000;
  height: 54px;
  padding: auto 31px;
`
export const FlexContainer = styled.div`
  display: flex;
`
export const PhoneContainer = styled.div`
  display: flex;
  > input {
    text-align: center;
  }
  > input:last-child {
    margin-left: 12px;
  }
`
export const SelectBar = styled.div`
  background: url(${upArrow}) no-repeat 120px/ 22px 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 54px;
  width: 120%;
  margin-right: 12px;
  border: 1px solid var(--grey-border);
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #000000;
  }

  &.clicked {
    background: url(${downArrow}) no-repeat 120px/ 22px 22px;
  }
`
export const Ul = styled.ul`
  display: none;

  &.clicked {
    display: block;
    border-radius: 5px;
    border: 1px solid var(--grey-border);
    width: 100%;
    height: 130px;
    overflow-y: scroll;
    padding-left: 24px;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    top: 60px;
    left: 0;
  }

  button {
    padding: 10px;
    font-size: 16px;
  }
`
