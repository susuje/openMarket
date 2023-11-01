import styled from 'styled-components'
import checked from '../../assets/icon/check-fill-box.svg'

export const Wrapper = styled.div`
  margin-left: 20px;
`
export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 18px;
`
export const Container = styled.div`
  border: 2px solid #000000;
  border-radius: 10px;
  width: 480px;
  overflow: hidden;
`
export const FirstDiv = styled.div`
  padding: 30px 30px 20px 30px;
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  &.ship {
    margin-bottom: 0px;
    padding-bottom: 19px;
    border-bottom: 1px solid var(--grey-border);
  }
  &:last-child {
    margin-top: 24px;
    margin-bottom: 0px;
  }

  p {
    font-size: 16px;
    span {
      font-size: 18px;
      font-weight: 700;
      color: #000000;
      margin-right: 4px;
    }
  }
  p:last-child {
    font-size: 14px;
    color: var(--light-grey);
  }
  strong {
    font-size: 24px;
    font-weight: 700;
    color: #eb5757;
  }
`

export const LastDiv = styled.div`
  background-color: #f2f2f2;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  input {
    width: 16px;
    height: 16px;
  }
  label {
    padding-left: 5px;
  }
`

export const Button = styled.button`
  color: white;
  background: #000000;
  font-size: 24px;
  font-weight: 700;
  padding: 19px 65px;
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 4px;

  &.disabled {
    background-color: var(--grey-border);
    cursor: default;
  }
  &.abled {
    background-color: #000000;
    cursor: pointer;
  }
`
