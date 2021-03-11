import React from 'react'
import Layout from '../component/organisms/Layout/index'
import Product from '../component/organisms/Product/index'

export default function Home() {
  return (
    <>
      <Layout title='TheBox' >
        <Product />
      </Layout>
    </>
  )
}
