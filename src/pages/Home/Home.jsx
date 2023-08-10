import React from 'react'
import TopNavBar from '../../components/TopNav/TopNavBar'
import Carousel from '../../components/Carousel/Carousel'
import CardProduct from '../../components/Product/CardProduct'
import HomeCategorie from '../../components/Categorie/HomeCategorie'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <TopNavBar />
      <Carousel />
      <HomeCategorie />
      <CardProduct />
      <Footer />
    </>
  )
}
