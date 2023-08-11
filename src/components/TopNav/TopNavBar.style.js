import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`

export const SearchBtn = styled.button`
  border: 1px solid #e0e0e0;
  width: 82px;
  height: 42px;
  //padding: 10px 30px;
  border-radius: 30px;
  margin-right: 5px;
  transition: all 1s;
  position: relative;
  &:hover {
    width: 600px;
    > img {
      position: absolute;
      transform: translate(-50%, -50%);
      right: 20px;
    }
  }
  img {
    position: absolute;
    width: 22px;
    height: 22px;
    transform: translate(-50%, -50%);
  }
`
export const CartBtn = styled.button`
  background-color: #e0e0e0;
  padding: 10px 30px;
  border-radius: 30px;
`
