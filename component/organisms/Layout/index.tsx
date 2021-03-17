import React from 'react';
import Menu from '../Menu/index'
import Footer from '../Footer/index'
import Head from "next/head";
import style from './Layout.module.scss'


const index = (props: any) => {
    return (
        <>
            <Head>
                <title>The Box</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,200;1,400;1,500;1,700&amp;display=swap" rel="stylesheet"></link>
            </Head>
            <Menu />
            <div className={style.container}>{props.children}</div>
            <Footer />
        </>
    );
};

export default index;
