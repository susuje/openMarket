import React, { useRef } from 'react'
import * as S from './HomeCategorie.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import cate1 from '../../assets/img/cate1.png'
import cate2 from '../../assets/img/cate2.png'
import cate3 from '../../assets/img/cate3.png'
import cate4 from '../../assets/img/cate4.png'
import cate5 from '../../assets/img/cate5.png'
import cate6 from '../../assets/img/cate6.png'
import cate7 from '../../assets/img/cate7.png'
import cate8 from '../../assets/img/cate8.png'

export default function HomeCategorie() {
  const images = useRef([
    { src: cate1, alt: '화장품 카테고리', title: 'Beauty' },
    { src: cate2, alt: '신발 카테고리', title: 'Shoes' },
    { src: cate3, alt: '음악 음반 카테고리', title: 'Music' },
    { src: cate4, alt: '패션 카테고리', title: 'Fashion' },
    { src: cate5, alt: '가구 카테고리', title: 'Furniture' },
    { src: cate6, alt: '홈 데코 카테고리', title: 'Home' },
    { src: cate7, alt: '문구 카테고리', title: 'Stationery' },
    { src: cate8, alt: '악세사리 카테고리', title: 'Accessories' },
  ])
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <S.H1>Shop Our Top Categories</S.H1>
      <S.SliderContainer {...settings}>
        {images.current.map((img, index) => (
          <S.ImageContainer>
            <S.Img src={img.src} alt={img.alt} />
            <S.Title>{img.title}</S.Title>
          </S.ImageContainer>
        ))}
      </S.SliderContainer>
    </>
  )
}
