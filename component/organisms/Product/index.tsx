import React, { useEffect } from 'react';
import Card from '../../modcules/Card/index'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts, } from '../../../redux/modules/ProductData'
import Link from 'next/link'
import Slider from "react-slick";

import style from './Product.module.scss'


const index = () => {
    // const { campaigns } = useSelector(state => state.ProductData)
    // console.log(campaigns)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={style.list__container}>
            <div className={style.list__kol}>
                <div className={style.list__header}>
                    <h2 className={style.list__title}>
                        Top 5 diễn viên được yêu thích nhất
                    </h2>
                    <div className={style.list__link}>
                        Now Streaming
                    </div>
                </div>
                <div className={style.list__content}>
                    <Slider {...settings}>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/asia.jpg" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />
                        </div>
                    </Slider>
                </div>
            </div >
            <div className={style.list__kol}>
                <div className={style.list__header}>
                    <h2 className={style.list__title}>
                        Top 5 diễn viên được yêu thích nhất
                    </h2>
                    <div className={style.list__link}>
                        Now Streaming
                    </div>
                </div>
                <div className={style.list__content}>
                    <Slider {...settings}>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/asia.jpg" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />
                        </div>
                    </Slider>
                </div>
            </div >
            <div className={style.list__kol}>
                <div className={style.list__header}>
                    <h2 className={style.list__title}>
                        Top 5 diễn viên được yêu thích nhất
                    </h2>
                    <div className={style.list__link}>
                        Now Streaming
                    </div>
                </div>
                <div className={style.list__content}>
                    <Slider {...settings}>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/asia.jpg" />
                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/imgtest.png" />

                        </div>
                        <div className={style.list__item}>
                            <img className={style.list__img} src="/japan.jpg" />
                        </div>
                    </Slider>
                </div>
            </div >

        </div >
    );
};

export default index;
