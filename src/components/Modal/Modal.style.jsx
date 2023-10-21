import styled from 'styled-components'
import closeIcon from '../../assets/icon/x-icon.svg'
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalWrapper = styled.article`
  background-color: white;
  border-radius: 10px;
  text-align: center;

  //페이지 가운데
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px;
  width: 320px;
  height: 150px;
`

export const P = styled.p`
  margin: 25px 0;
  font-weight: 500;
`
export const Btn = styled.button`
  font-size: 16px;
  border-radius: 5px;
  padding: 7px 30px;
  background-color: black;
  color: white;
  &.cancle {
    background-color: white;
    color: var(--light-grey);
    border: 1px solid var(--light-grey);
    margin-right: 10px;
  }
`
export const CloseIcon = styled.button`
  position: absolute;
  right: 15px;
  background: url(${closeIcon}) no-repeat center;
  width: 20px;
  height: 20px;
`
