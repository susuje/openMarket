import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 100px auto 0px auto;
`
export const CartInfoBar = styled.div`
  background-color: #f2f2f2;
  display: grid;
  width: 100%;
  max-width: 1280px;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-self: center;
  padding: 18px 0px;
  p {
    font-size: 18px;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const TotalPrice = styled.p`
  font-size: 18px;
  width: 100%;
  max-width: 1280px;
  font-weight: 500;
  text-align: right;
  margin-top: 30px;

  strong {
    font-size: 24px;
    color: var(--red);
    font-weight: 700;
    margin-left: 10px;
  }
`
