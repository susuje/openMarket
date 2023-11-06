import styled from 'styled-components'
import Slider from 'react-slick'

export const Div = styled.div`
  max-width: 1920px;
  margin: 50px auto 0px auto;
`
export const SliderContainer = styled(Slider)`
  .slick-slide div {
    margin-left: 15px;
  }

  overflow: hidden;
`
export const ImageContainer = styled.div`
  max-width: 200px;
  max-height: 250px;
  position: relative;
  cursor: pointer;
`
export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100%;
`
export const H1Div = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
export const H1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  margin-left: 20px;
  margin-top: 100px;
`
export const Title = styled.p`
  font-weight: 500;
  font-size: 30px;
  position: absolute;
  top: 83px;
  color: white;
  width: 100%; // 너비 설정
  text-align: center; // 정렬 설정
  z-index: 10;
`
