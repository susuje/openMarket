import styled from 'styled-components'

export const Li = styled.li`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 16px;

  border-bottom: 1px solid var(--grey-border);
`

export const Left = styled.div`
  //background-color: blue;
  padding: 8px 0px 18px 8px;
  div {
    display: flex;
  }
`

export const Img = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 0px 36px;

  p {
    font-size: 14px;
    color: var(--light-grey);
  }
`
export const ProductName = styled.h4`
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 10px;
`

export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  align-self: center;

  p {
    font-size: 18px;
    color: var(--light-grey);
  }
  strong {
    font-size: 18px;
    font-weight: 700;
  }
`
