import React from 'react';
import style from './Nav.module.scss'

const index = () => {
    return (
        <div className={style.menu__header}>
            <div className="container">
                <div className={style.menu}>
                    <div className={style.menu__left}>
                        <div className={style.menu__logo}>TheBox</div>
                        <div className={style.menu__nav}>
                            <ul className={style.menu__ul}>
                                <li className={style.menu__li}>Trang Chủ</li>
                                <li className={style.menu__li}>Khám Phá</li>
                                <li className={style.menu__li}>Hoạt Động</li>
                                <li className={style.menu__li}>Ưu đãi</li>
                                <li className={style.menu__li}>Liên Hệ</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.menu__right}>
                        <div className={style.menu__search}>
                            <input className={style.menu__inputsearch} type="text" />
                            <div className={style.menu__notification}>noti</div>
                        </div>
                        <div className={style.menu__sign}>Đăng Nhập</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default index;
