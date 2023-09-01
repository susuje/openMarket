import styled from 'styled-components'
import imgIcon from '../../assets/icon/icon-uploadImg.svg'

export const Wrapper = styled.div`
  padding: 44px 20px 200px 20px;
`
export const Container = styled.div`
  width: 100%;
  max-width: 1380px;
  margin: 0px auto;
`
export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`

export const FlexDiv = styled.div`
  display: flex;
`

/////////////왼쪽

export const Caution = styled.div`
  h4 {
    color: var(--red);
    font-weight: 500;
    margin-bottom: 10px;
  }

  div {
    border-radius: 5px;
    background: #ffefe8;
    width: 320px;
    padding: 20px;

    p {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`

//////////////////////////오른쪽 v

export const UploadForm = styled.form`
  color: var(--light-grey); //label 폰트색상
  width: 100%;
  margin-left: 30px;
`

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 40px;
`

export const ProductImg = styled.div`
  p {
    margin-bottom: 10px;
  }
`

export const InputLabel = styled.label`
  display: block;
  width: 100%;
  aspect-ratio: 1/1; /* 가로 너비와 세로 높이의 비율을 1:1로 설정 */
  background-color: var(--grey-border);
  position: relative;
  &:hover {
    background-color: #d2d1d1;
  }
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${imgIcon}) no-repeat center center / contain;
  }
  input {
    display: none;
  }
`

export const ProductInfo = styled.div`
  margin-left: 30px;
`
export const InputBox = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 10px;
  }
  &:first-child {
    position: relative;
  }
  small {
    color: var(--grey-border);
    position: absolute;
    top: 50%;
    right: 20px;
  }
`

export const NameInput = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 54px;
  border: 1px solid var(--grey-border);
  padding: 17px 70px 17px 16px;
`

export const ShipBtn = styled.button`
  width: 220px;
  height: 54px;
  font-weight: 500;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid var(--grey-border);
  color: var(--light-grey);

  &:first-of-type {
    margin-right: 10px;
  }
  &:hover {
    border: 1px solid #000000;
  }

  &.active {
    color: white;
    background-color: #000000;
  }
`
export const ProductDetail = styled.div`
  p {
    margin-bottom: 10px;
  }
  textarea {
    border-radius: 5px;
    padding: 20px;
    width: 100%;
    height: 400px;
    resize: none;
    border: 1px solid var(--grey-border);
  }
`

export const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`

export const CancelBtn = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  color: var(--light-grey);
  border: 1px solid var(--grey-border);
  &:hover {
    border: 1px solid #000000;
  }
`
export const UploadBtn = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  color: white;
  background-color: #000000;
  margin-left: 14px;
`