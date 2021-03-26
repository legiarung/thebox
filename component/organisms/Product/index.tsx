import React, { useEffect } from 'react';
import Card from '../../modcules/Card/index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, } from '../../../redux/modules/ProductData'
import Link from 'next/link'
import Slider from "react-slick";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebookF, faTwitterSquare), faYoutube;

import style from './Product.module.scss'


const index = () => {
    const { campaigns } = useSelector(state => state.ProductData)
    console.log(campaigns)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

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
            <div className={style.banner__box}>
                <img className={style.banner__img} src="/banner.jpg" />
            </div>
            <div className={style.main__box}>
                <div className={style.main__title}>
                    <div className={style.main__title__name}>Nổi Bật</div>
                </div>
                <div className={style.main__news}>
                    <div className={style.main__item__first}>
                        <img className={style.list__img} src="/imgtest.png" />
                    </div>
                    <div className={style.main__item}>
                        <img className={style.list__img} src="/japan.jpg" />
                    </div>
                    <div className={style.main__item}>
                        <img className={style.list__img} src="/asia.jpg" />
                    </div>
                    <div className={style.main__item}>
                        <img className={style.list__img} src="/imgtest.png" />
                    </div>
                    <div className={style.main__item}>
                        <img className={style.list__img} src="/imgtest.png" />
                    </div>
                </div>
            </div>
            <div className={style.list__selection}>
                <div className={style.list__top}>
                    <div className={style.list__kol}>
                        <div className={style.list__header}>
                            <h2 className={style.list__title}>
                                Top 5
                            </h2>
                            <div className={style.list__name}>Diễn viên được yêu thích</div>
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
                                Top 5
                    </h2>
                            <div className={style.list__name}>Diễn viên rank cao nhất</div>
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
                                Top 5
                    </h2>
                            <div className={style.list__name}>Diễn viên trẻ nổi bật</div>
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
                </div>
                <div className={style.news}>
                    <div className={style.news__title}>
                        <div className={style.news__title__name}>Gần Đây</div>
                    </div>
                    <div className={style.news__content}>
                        <div className={style.news__item}>
                            <img className={style.news__img} src="/japan.jpg" />
                            <div>
                                <h3>HOT</h3>
                                <p className={style.news__text} >Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la.</p>
                            </div>
                        </div>
                        <div className={style.news__item}>
                            <img className={style.news__img} src="/japan.jpg" />
                            <div>
                                <h3>NEW</h3>
                                <p className={style.news__text}>Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la. </p>
                            </div>
                        </div>
                        <div className={style.news__item}>
                            <img className={style.news__img} src="/japan.jpg" />
                            <div>
                                <h3>HOT</h3>
                                <p className={style.news__text}>Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.highlights}>
                    <div className={style.highlights__title}>
                        <div className={style.highlights__title__name}>Xem nhiều</div>
                    </div>
                    <div className={style.highlights__content}>
                        <div className={style.highlights__item}>
                            <img className={style.highlights__img} src="/japan.jpg" />
                            <div>
                                <h3>HOT</h3>
                                <p className={style.highlights__text} >Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la.</p>
                            </div>
                        </div>
                        <div className={style.highlights__item}>
                            <img className={style.highlights__img} src="/japan.jpg" />
                            <div>
                                <h3>NEW</h3>
                                <p className={style.highlights__text}>Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la. </p>
                            </div>
                        </div>
                        <div className={style.highlights__item}>
                            <img className={style.highlights__img} src="/japan.jpg" />
                            <div>
                                <h3>HOT</h3>
                                <p className={style.highlights__text}>Các công ty có thể âm thầm chuyển hướng lại những đoạn tin nhắn của người dùng SMS tới những hacker, đôi khi chỉ với 16 đô la.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.social}>
                    <div className={style.social__title}>
                        <div className={style.social__title__name}>Mạng xã hội</div>
                    </div>
                    <div className={style.social__content}>
                        <div className={style.social__item}>
                            <div className={style.social__item__social}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} color="#516eab" size="2x" />
                                <div>99,999</div>
                                <div>Fans</div>
                            </div>
                        </div>
                        <div className={style.social__item}>
                            <div className={style.social__item__social}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} color="#29c5f6" size="2x" />
                                <div>9,999</div>
                                <div>Followers</div>
                            </div>
                        </div>
                        <div className={style.social__item}>
                            <div className={style.social__item__social}>
                                <FontAwesomeIcon icon={['fab', 'youtube']} color="#e14e42" size="2x" />
                                <div>19,999</div>
                                <div>Subricebers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default index;
