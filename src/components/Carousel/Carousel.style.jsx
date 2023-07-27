import styled from 'styled-components'
import Slider from 'react-slick'
export const SliderContainer = styled(Slider)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; // 공백 제거
  margin-bottom: 80px;
`

export const Img = styled.img`
  object-fit: cover; // 이미지를 가로/세로로 채우기 위해서는 cover 속성을 사용하세요
  width: 100%; // 이미지의 너비를 100%로 설정하세요
  height: 100%; // 이미지의 높이를 100%로 설정하세요
  max-height: 500px; // 최대 높이를 설정하세요
`
export const DotsDiv = styled.div`
  bottom: 20px;

  & ul li.slick-active button::before {
    opacity: 0.9;
    color: black;
  }

  & > ul li button::before {
    opacity: 0.4;
    color: black;
  }
`
