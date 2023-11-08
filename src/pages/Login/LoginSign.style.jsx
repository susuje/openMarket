import styled from 'styled-components'

export const Img = styled.img`
  width: 334px;
  height: 95px;
  margin-bottom: 50px;
  cursor: pointer;
`
export const Container = styled.div`
  width: max-content;
  text-align: center;

  //가운데배치
  margin: 0 auto;
  padding: 50px;
`
export const Footer = styled.footer`
  margin-top: 30px;
  font-size: 16px;
  > a:first-child {
    &::after {
      content: '|';
      margin: 0px 14px;
    }
  }
`
