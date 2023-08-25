import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 80px auto 0px auto;
`

export const Img = styled.img`
  width: 50%;
  height: 50%;
  max-width: 600px;
  max-height: 600px;
  border-radius: 20px;
`
export const InfoWrapper = styled.div`
  margin-left: 50px;
  max-width: 600px;
  width: 50%;
  p {
    color: var(--light-grey);
    font-size: 18px;
  }
  p.won {
    color: #000;
    margin-bottom: 161px;
  }
  p.ship {
    font-size: 16px;
    padding-bottom: 20px;
  }
`

export const ProductName = styled.h4`
  font-size: 36px;
  margin-top: 16px;
  margin-bottom: 20px;
`

export const TotalPriceDiv = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  p {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 18px;
      font-weight: 400;
      margin-right: 12px;
      color: var(--light-grey);
      + p {
        color: var(--grey-border);
      }
      span {
        font-weight: 700;
        color: #000;
      }
    }

    strong {
      font-size: 18px;
    }
  }
`

export const Price = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin-right: 2px;
`

export const Div = styled.div`
  padding: 30px 0px 30px 0px;
  border-top: 2px solid var(--grey-border);
  border-bottom: 2px solid var(--grey-border);
`
export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Btn = styled.button`
  background-color: #000;
  color: white;
  width: 60%;
  height: 60px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  &.cart {
    background-color: var(--light-grey);
    width: 37%;
  }
`

export const Content = styled.div`
  background-color: #f2f2f2;
  max-width: 1280px;
  height: 40rem;
  margin: 0 auto;
  text-align: center;
  line-height: 40rem;
  color: var(--grey-border);
  font-size: 36px;
  margin-bottom: 140px;
`
