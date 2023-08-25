import styled from 'styled-components'

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 1fr;
  padding: 16px 11px 16px 30px;
  background-color: white;
  border-bottom: 1px solid var(--grey-border);
`
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
  }
`
export const NameStock = styled.div`
  margin-left: 30px;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    color: var(--light-grey);
  }
`
export const Price = styled.strong`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  align-self: center;
`
export const Btn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  margin: auto;
  &.modify {
    background-color: #000;
    color: white;
  }

  &.delete {
    border: 1px solid var(--grey-border);
  }
`
