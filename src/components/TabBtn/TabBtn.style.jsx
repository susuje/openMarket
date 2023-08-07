import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  &::after {
    content: '';
    width: 25px;
    height: 20px;
    position: absolute;
    z-index: 15;
    background-color: white;
    top: 63px;
    right: 265px;
  }
`

export const LeftBtn = styled.button`
  width: 275px;
  height: 80px;
  font-size: 18px;
  border: 1px solid var(--grey-border);
  border-radius: 10px 10px 0px 0px;
  font-weight: 700;
  padding: 20px 0px 38px 0px;
  border-bottom: 1px solid white;
  background-color: white;
  z-index: 15;
  position: relative;
`
export const RightBtn = styled.button`
  width: 275px;
  height: 80px;
  font-size: 18px;
  border: 1px solid var(--grey-border);
  border-radius: 10px 10px 0px 0px;
  font-weight: 700;
  padding: 20px 0px 38px 0px;
  border-bottom: 1px solid white;
  background-color: #f2f2f2;
`
