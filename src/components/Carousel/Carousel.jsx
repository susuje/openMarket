import React, { useRef, useState, useEffect } from 'react'
import * as S from './Carousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import banner from '../../assets/img/banner.svg'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.svg'

export default function Carousel() {
  const images = useRef([
    { src: banner, alt: '첫번째 배너' },
    { src: banner2, alt: '두번째 배너 코드할인' },
    { src: banner3, alt: '세번째 배너 사이트소개' },
  ])
  const settings = {
    dots: true, // 캐러셀 밑의 지정 콘텐츠로 이동할 수 있는 버튼
    infinite: true, // 콘텐츠 맨 끝에서 다시 앞으로 반복
    speed: 500, // 콘텐츠 넘어가는 속도 (ms)
    slidesToShow: 1, // 한화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수
    autoplay: true,
    autoplaySpeed: 2000,

    appendDots: dots => (
      <S.DotsDiv>
        <ul>{dots}</ul>
      </S.DotsDiv>
    ),
  }
  return (
    <S.SliderContainer {...settings}>
      {images.current.map((img, index) => (
        <S.Img src={img.src} alt={img.alt} />
      ))}
    </S.SliderContainer>
  )
}
