import React from 'react'
import Head from 'next/head'
import Menu from '../component/organisms/Menu/index'
import Product from '../component/organisms/Product/index'
import Footer from '../component/organisms/Footer/index'

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Product />
      <Footer />
    </>
  )
}

export default Home
