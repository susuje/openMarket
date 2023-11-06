import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './HomeCategorie.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import cate1 from '../../assets/img/beaute.jpg'
import cate2 from '../../assets/img/stat.jpg'
import cate3 from '../../assets/img/cate4.png' //패션
import cate4 from '../../assets/img/sh.jpg' //신발
import cate5 from '../../assets/img/fur.jpg'
import cate6 from '../../assets/img/cate6.png'
import cate7 from '../../assets/img/mu.jpg'
import cate8 from '../../assets/img/cate8.png'
import cate9 from '../../assets/img/etc.png'

export default function HomeCategorie() {
  const navigate = useNavigate()
  const images = useRef([
    { src: cate1, alt: '화장품 카테고리', title: 'Beauty' },
    { src: cate2, alt: '문구 카테고리', title: 'Stationery' },
    { src: cate3, alt: '패션 카테고리', title: 'Fashion' },
    { src: cate4, alt: '신발 카테고리', title: 'Shoes' },
    { src: cate5, alt: '가구 카테고리', title: 'Furniture' },
    { src: cate6, alt: '홈 데코 카테고리', title: 'Home' },
    { src: cate7, alt: '음악 음반 카테고리', title: 'Music' },
    { src: cate8, alt: '악세사리 카테고리', title: 'Accessories' },
    { src: cate9, alt: 'etc 카테고리', title: 'Etc' },
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
    <S.Div>
      <S.H1Div>
        <S.H1>Top Categories</S.H1>
      </S.H1Div>
      <S.SliderContainer {...settings}>
        {images.current.map((img, index) => (
          <S.ImageContainer onClick={() => navigate(`/category/${img.title}`)}>
            <S.Img src={img.src} alt={img.alt} />
            <S.Title>{img.title}</S.Title>
          </S.ImageContainer>
        ))}
      </S.SliderContainer>
    </S.Div>
  )
}
