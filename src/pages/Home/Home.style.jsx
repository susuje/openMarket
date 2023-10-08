import styled from 'styled-components'

export const ProductContainer = styled.section`
  margin: 0 auto;
  padding: 80px 20px;
  max-width: 1280px;
`
export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6vh 3vw;

  /* @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`
