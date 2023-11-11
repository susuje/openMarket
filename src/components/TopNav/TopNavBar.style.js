import styled from 'styled-components'
import triangleUp from '../../assets/icon/icon-triangle-up.svg'
import triangleDown from '../../assets/icon/icon-triangle-down.svg'
import searchIcon from '../../assets/icon/search.svg'

export const Nav = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
  //box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`
export const CenterNav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
export const FlexBox = styled.div`
  display: flex;
`
export const SearchBox = styled.div`
  position: relative;
`
export const SearchInput = styled.input`
  border: 1px solid #e0e0e0;
  width: 82px;
  height: 42px;

  padding: 0 60px 0 30px;
  border-radius: 20px;
  margin-right: 5px;
  transition: all 1s;

  &:hover {
    width: 600px;
  }

  &.typed {
    width: 600px;
  }
`
export const SearchBtn = styled.button`
  background: url(${searchIcon}) center center no-repeat;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 5px;
  right: 35px;
`

export const UserBox = styled.div`
  position: relative;
`
export const UserBtn = styled.button`
  background-color: #f2f2f2;
  padding: 10px 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;

  &.clicked {
    background: url(${triangleUp}) no-repeat right 15px center;
    background-color: #f2f2f2;
  }
  &.unclicked {
    background: url(${triangleDown}) no-repeat right 15px center;
    background-color: #f2f2f2;
  }
  img {
    width: 22px;
    height: 22px;
  }
  p {
    font-weight: 500;
    margin-left: 5px;
  }
`
export const Ul = styled.ul`
  overflow: hidden;
  position: absolute;
  left: 15px;
  top: 50px;
  background-color: white;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  li {
    transition: 0.5s all;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    &.second {
      padding: 0 10px;
    }
    &:hover {
      button {
        transition: 0.1s all;
        background: 10px 10px #f2f2f2;
        border-radius: 20px;
        width: 80px;
      }
    }
    button {
      // width: 100px;
      padding: 10px 0;
    }
  }
`
