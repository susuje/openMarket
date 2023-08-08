import styled from 'styled-components'
import minus from '../../assets/icon/icon-minus.svg'
import plus from '../../assets/icon/icon-plus.svg'
import deleteIcon from '../../assets/icon/icon-delete.svg'
import unChecked from '../../assets/icon/check-box.svg'
import checked from '../../assets/icon/check-box-Fill.svg'

//unicorn shop 마크업 찾아보기.

export const Article = styled.article`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  position: relative;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &.second {
    min-width: 292px;
    margin-right: 60px;
  }
`
export const CheckLabel = styled.label`
  width: 20px;
  height: 20px;
  background: url(${checked}) no-repeat center/20px 20px;
  margin-right: 40px;
`
export const CheckInput = styled.input`
  margin: 0;
  display: none;
`

export const ProductImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  margin-right: 36px;
`
export const ProductInfo = styled.div`
  > p {
    font-size: 14px;
    color: #767676;
  }
  > p:first-child {
    margin-bottom: 10px;
  }
`
export const Price = styled.strong`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 65px;
  display: inline-block;
`
export const H4 = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`

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

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
`
export const TotalPrice = styled.strong`
  font-size: 18px;
  font-weight: 700;
  color: #eb5757;
  margin-bottom: 26px;
`
export const BuyBtn = styled.button`
  width: 130px;
  height: 40px;
  background-color: #000000;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
`
export const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${deleteIcon}) no-repeat center;
  position: absolute;
  top: 15px;
  right: 15px;
`
