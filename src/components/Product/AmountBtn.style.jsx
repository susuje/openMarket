import styled from 'styled-components'
import minus from '../../assets/icon/icon-minus.svg'
import plus from '../../assets/icon/icon-plus.svg'

export const CountDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px;
  width: 150px;
  height: 50px;
`

export const CountBtn = styled.button`
  border: 1px solid var(--grey-border);
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  background: url(${minus}) no-repeat center/20px 20px;
  &.right {
    border-right: 1px solid var(--grey-border);
    border-radius: 0px 5px 5px 0px;
    background: url(${plus}) no-repeat center/20px 20px;
  }
`

export const Num = styled.span`
  border: 1px solid var(--grey-border);
  border-right: none;
  font-size: 18px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
`
