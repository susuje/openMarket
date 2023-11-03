import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  div.noCart {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin-bottom: 35px;
  }
  p.noCart {
    font-weight: 700;
    font-size: 24px;
  }
`
export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0;
`

export const BtnDiv = styled.div`
  margin: 50px 0 200px 0;
  text-align: center; //버튼 가운데로
`
export const OrderBtn = styled.button`
  //display: inline-block;
  width: 220px;
  height: 75px;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-size: 28px;
`
