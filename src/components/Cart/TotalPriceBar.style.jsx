import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  background-color: #f2f2f2;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 32px 1fr 32px 1fr 1fr;
  // margin-bottom: 300px;
  padding-top: 46px;
  text-align: center;
`

export const CalculDiv = styled.div`
  margin-bottom: 42px;
  p {
    font-size: 16px;

    span {
      font-size: 24px;
      font-weight: 700;
      margin-right: 2px;
    }
  }

  p:first-child {
    margin-bottom: 12px;
  }
`

export const Icon = styled.img`
  width: 34px;
  height: 34px;
  margin-top: 10px;
`

export const TotalPrice = styled.div`
  p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    &:last-child {
      font-size: 18px;
      color: #eb5757;
      font-weight: 400;

      margin-left: 2px;
    }
    span {
      font-size: 36px;

      font-weight: 700;
    }
  }
`
