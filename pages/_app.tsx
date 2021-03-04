import React from 'react'
import Head from 'next/head'
import { Provider } from "react-redux"
import store from '../redux/store'
import MainLayout from './_layout'
import { AppProps } from 'next/app'
import './main.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp