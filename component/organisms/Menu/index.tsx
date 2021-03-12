import React, { useEffect, useState } from 'react';
import style from './Nav.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCoffee, faBell)
var classNames = require('classnames');


const index = () => {
    // const [navBar, setnavBar] = useState(false);
    const [showMenu, setshowMenu] = useState(false);
    // const changeNavbar = () => {
    //     if (window.scrollY > 60) {
    //         setnavBar(true)
    //     } else {
    //         setnavBar(false)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', changeNavbar)
    // });

    const ShowMenu = () => setshowMenu(!showMenu)
    const RemoveMenu = () => setshowMenu(!showMenu)


    return (
        <div className={style.menu__header}>
            <div className={style.menu__container}>
                <div className={style.menu}>
                    <div className={style.menu__left}>
                        <div className={style.menu__logo}>
                            <Link href="/">
                                <a>
                                    <img className={style.menu__logo_img} src="/thebox_logo.png" />
                                </a>
                            </Link>
                        </div>
                        <div className={classNames({
                            [style.menu__nav]: !showMenu,
                            [style.menu__nav_mobile]: showMenu
                        })}>
                            <ul className={style.menu__ul}>
                                <li className={style.menu__li}>
                                    <Link href="/">
                                        <a className={style.menu__li_a}>Trang Chủ</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/diendan">
                                        <a className={style.menu__li_a}>Diễn Đàn</a>
                                    </Link>
                                </li>
                                <li className={style.menu__li}>
                                    <Link href="/timkiem">
                                        <a className={style.menu__li_a}>Tìm kiếm</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/sosanh">
                                        <a className={style.menu__li_a}>So Sánh</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/lienhe">
                                        <a className={style.menu__li_a}>Liên Hệ</a>
                                    </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.menu__right}>
                        <div className={style.menu__search}>
                            <div className={style.menu__inputsearch}>
                                <form action="" method="get">
                                    <input className={style.menu__input} type="text" placeholder='Tìm Kiếm' />
                                    <button className={style.menu__icon}>
                                        <FontAwesomeIcon icon="search" />
                                    </button>
                                </form>
                            </div>
                            <div className={style.menu__notification}>
                                <FontAwesomeIcon icon="bell" />
                            </div>
                        </div>
                        <div className={style.menu__sign}>Đăng Nhập</div>
                    </div>
                    {
                        !showMenu && (
                            <div onClick={ShowMenu} className={style.menu__mobile} >
                                <span className={style.menu__mobile_span}></span>
                                <span className={style.menu__mobile_span}></span>
                                <span className={style.menu__mobile_span}></span>
                            </div>
                        )
                    }
                    {
                        showMenu && (
                            <div onClick={RemoveMenu} className={style.menu__delete} >
                                <span className={style.menu__delete_span}></span>
                                <span className={style.menu__delete_span}></span>
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default index;
