import styled from 'styled-components'
import unchecked from '../../assets/icon/check-box.svg'
import checked from '../../assets/icon/check-box-Fill.svg'

export const Container = styled.div`
  padding: 20px 0px 20px 0px;
  border-radius: 10px;
  background-color: #f2f2f2;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  p {
    font-size: 18px;
  }
`
export const CheckLabel = styled.label`
  margin-left: 21.6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 15rem;
  &.checked {
    background: url(${checked}) no-repeat center/20px 20px;
  }
  &.unchecked {
    background: url(${unchecked}) no-repeat center/20px 20px;
  }
`
export const CheckInput = styled.input`
  margin: 0;
  display: none;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  &.second {
    justify-content: space-between;
    min-width: 290px;
    margin-right: 117px;
  }
`
