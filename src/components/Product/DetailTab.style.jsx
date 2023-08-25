import styled from 'styled-components'

export const Tab = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 140px;
  margin-bottom: 50px;
`
export const Btn = styled.button`
  border-bottom: 6px solid #e0e0e0;
  //display: inline-block;
  color: var(--light-grey);
  padding: 18px 0px 12px 0px;
  font-size: 18px;
  font-weight: 500;
  &.active {
    border-bottom: 6px solid #000000;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }
`
