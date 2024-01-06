import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './HomeCategorie.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ReactComponent as Next } from '../../assets/icon/activePageRightBtn.svg'
import { ReactComponent as Prev } from '../../assets/icon/activePageLeftBtn.svg'

import cate1 from '../../assets/img/beaute.webp'
import cate2 from '../../assets/img/stat.webp'
import cate3 from '../../assets/img/cate4.webp' //패션
import cate4 from '../../assets/img/sh.webp' //신발
import cate5 from '../../assets/img/fur.webp'
import cate6 from '../../assets/img/cate6.webp'
import cate7 from '../../assets/img/mu.webp'
import cate8 from '../../assets/img/cate8.webp'
import cate9 from '../../assets/img/etc.webp'

export default function HomeCategorie({ allPages }) {
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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: (
      <S.NextDiv>
        <Next />
      </S.NextDiv>
    ),

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
          <S.ImageContainer
            onClick={() =>
              navigate(`/category/${img.title}`, {
                state: {
                  allPages: allPages,
                },
              })
            }
          >
            <S.Img src={img.src} alt={img.alt} />
            <S.Title>{img.title}</S.Title>
          </S.ImageContainer>
        ))}
      </S.SliderContainer>
    </S.Div>
  )
}
