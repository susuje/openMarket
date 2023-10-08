import styled from 'styled-components'
import glass from '../../assets/img/glass.jpg'

export const Card = styled.li`
  /* width: 350px;
  height: 460px; */

  border-radius: 1rem;
  padding: 1rem 1rem 1.5rem 1rem;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  position: relative;
`
export const SellerName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  color: var(--light-grey);
  margin-bottom: 12px;
`
export const ImgContainer = styled.div`
  padding-top: 95%;
  background: url(${glass}) no-repeat center;
  background-size: cover;
  border-radius: 1rem;
`
export const ProductName = styled.p`
  color: var(--light-grey);
  font-size: 20px;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 15px;
  margin-left: 10px;
`
export const ProductPrice = styled.p`
  font-size: 26px;
  font-weight: 700;
  margin-left: 10px;
`

export const CartBtn = styled.button`
  position: absolute;
  right: 30px;
  top: 55px;
`
