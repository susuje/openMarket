import styled from 'styled-components'

//전체적으로 padding넣어줘야 확대해도 예브게잘보임.

export const Container = styled.div`
  width: 100%;
  max-width: 1380px;
  margin: 0px auto 200px auto;
`
export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;

  span {
    margin-left: 16px;
    font-weight: 500;
    box-shadow: inset 0 -10px #bfffa1;
  }
`
export const FlexDiv = styled.div`
  display: flex;
  margin-top: 42px;
  height: 500px;
`
