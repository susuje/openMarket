import React from 'react'
import * as S from './Home.style'

import TopNavBar from '../../components/TopNav/TopNavBar'
import Carousel from '../../components/Carousel/Carousel'
import CardProduct from '../../components/Product/CardProduct'
import HomeCategorie from '../../components/Categorie/HomeCategorie'
import Footer from '../../components/Footer/Footer'

import { useRecoilValue } from 'recoil'
import { userTypeState } from '../../atoms/Atoms'

export default function Home() {
  const userType = useRecoilValue(userTypeState)
  return (
    <>
      <TopNavBar userType={userType} />
      <Carousel />
      <HomeCategorie />
      <S.ProductContainer>
        <S.ProductLists>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </S.ProductLists>
      </S.ProductContainer>
      <Footer />
    </>
  )
}
