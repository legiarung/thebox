import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts, } from '../../../redux/modules/ProductData'
import style from './Asia.module.scss'
import Link from 'next/link'

const index = () => {
    // const { campaigns } = useSelector(state => state.ProductData)
    // console.log(campaigns)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])

    return (
        <div className={style.main__home}>
            <div className={style.main__container}>
                <div className={style.main__top}>
                    <div className={style.main__noti}>
                        <small>
                            Thông báo: Nền tảng kết nối nhãn hàng - người ảnh hưởng “Influencer Platform” là một trong những dự án lớn của Blue Agency, cần nhiều thời gian công sức và chất xám để hoàn thiện. Ứng dụng và Website đang trong thời gian thử nghiệm và phát triển, cảm ơn quý khách đã tin tưởng và liên hệ đến Blue Agency
                    </small>
                    </div>
                    <div className={style.main__menu}>
                        <ul className={style.main__menu__ul}>
                            <li className={style.main__menu__li}>
                                <Link href="/Asia">
                                    <a href="" className={style.main__menu__a}>
                                        Asia
                                </a>
                                </Link>

                            </li>
                            <li className={style.main__menu__li}>
                                <Link href="/Japan">
                                    <a href="" className={style.main__menu__a}>
                                        Japan
                                </a>
                                </Link>
                            </li>
                            <li className={style.main__menu__li}>
                                <Link href="/Europe">
                                    <a href="" className={style.main__menu__a}>
                                        Europe
                                </a>
                                </Link>
                            </li>
                        </ul>
                        <div className={style.main__menu__sort}>
                            <button className={style.main__menu__btn}>Facebook</button>
                            <button className={style.main__menu__btn}>Fitter</button>
                        </div>
                    </div>
                </div>
                <div className={style.list__kol}>
                    <div className={style.product__item}>
                        <div className={style.product__br}>
                            <img className={style.product__img} src="/asia.jpg" />
                        </div>
                        <div className={style.infokol}>
                            <div className={style.namekol}>Why So Serious</div>
                            <div className={style.flowkol}>2.400.000 Followers </div>
                        </div>

                    </div>
                    <div className={style.product__item}>
                        <div className={style.product__br}>
                            <img className={style.product__img} src="/asia.jpg" />
                        </div>
                        <div className={style.infokol}>
                            <div className={style.namekol}>Why So Serious</div>
                            <div className={style.flowkol}>2.400.000 Followers </div>
                        </div>

                    </div>
                    <div className={style.product__item}>
                        <div className={style.product__br}>
                            <img className={style.product__img} src="/asia.jpg" />
                        </div>
                        <div className={style.infokol}>
                            <div className={style.namekol}>Why So Serious</div>
                            <div className={style.flowkol}>2.400.000 Followers </div>
                        </div>

                    </div>
                    <div className={style.product__item}>
                        <div className={style.product__br}>
                            <img className={style.product__img} src="/asia.jpg" />
                        </div>
                        <div className={style.infokol}>
                            <div className={style.namekol}>Why So Serious</div>
                            <div className={style.flowkol}>2.400.000 Followers </div>
                        </div>

                    </div>
                    <div className={style.product__item}>
                        <div className={style.product__br}>
                            <img className={style.product__img} src="/asia.jpg" />
                        </div>
                        <div className={style.infokol}>
                            <div className={style.namekol}>Why So Serious</div>
                            <div className={style.flowkol}>2.400.000 Followers </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
