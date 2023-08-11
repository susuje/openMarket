import styled from 'styled-components'

export const Card = styled.div`
  width: 350px;
  height: 460px;
  border-radius: 16px;
  padding: 14px 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  position: relative;
`
export const SellerName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  color: var(--light-grey);
  margin-bottom: 12px;
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
export const Img = styled.img`
  width: 334px;
  height: 295px;
  object-fit: cover;
  border-radius: 16px;
`
export const CartBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 55px;
`
