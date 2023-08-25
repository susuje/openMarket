import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: 1px solid var(--grey-border);
  margin-left: 30px;
  overflow: hidden;
`
export const InfoBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 1fr;
  background-color: white;
  text-align: center;
  padding: 18px 30px;
  border-bottom: 1px solid var(--grey-border);

  p {
    font-size: 18px;
  }
`
export const ProductList = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 100px;
`
