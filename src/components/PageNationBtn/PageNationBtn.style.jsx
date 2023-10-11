import styled from 'styled-components'
import activeLeftBtn from '../../assets/icon/activePageLeftBtn.svg'
import activeRightBtn from '../../assets/icon/activePageRightBtn.svg'
import rightBtn from '../../assets/icon/pageRightBtn.svg'
import leftBtn from '../../assets/icon/pageLeftBtn.svg'

export const PageNation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

export const PageNumList = styled.li`
  margin: 0 10px;
  border: 1px solid #bcbcbc;
  cursor: pointer;

  color: #bcbcbc;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;

  width: 50px;
  height: 50px;
  border-radius: 70%;

  &.active {
    background-color: #bcbcbc;
    color: white;
  }
`
export const LeftBtn = styled.button`
  background: url(${leftBtn}) center center no-repeat;
  width: 33px;
  height: 33px;
`
export const RightBtn = styled.button`
  background: url(${activeRightBtn}) center center no-repeat;
  width: 33px;
  height: 33px;
`
