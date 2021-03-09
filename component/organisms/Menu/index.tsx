import React from 'react';
import style from './Nav.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCoffee, faBell)

const index = () => {
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
                        <div className={style.menu__nav}>
                            <ul className={style.menu__ul}>
                                <li className={style.menu__li}>
                                    <Link href="/">
                                        <a className={style.menu__li_a}>Trang Chủ</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/">
                                        <a className={style.menu__li_a}>Khám Phá</a>
                                    </Link>
                                </li>
                                <li className={style.menu__li}>
                                    <Link href="/">
                                        <a className={style.menu__li_a}>Hoạt Động</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/">
                                        <a className={style.menu__li_a}>Ưu đãi</a>
                                    </Link></li>
                                <li className={style.menu__li}>
                                    <Link href="/">
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

                </div>
            </div>
        </div>
    );
};

export default index;
