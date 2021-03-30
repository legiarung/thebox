import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Link from 'next/link'
import style from './Rank.module.scss'
import Image from 'next/image'


const index = ({ name, data }) => {
    console.log(data)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className={style.list__kol}>
            <div className={style.list__header}>
                <h2 className={style.list__title}>
                    Top 5
                    </h2>
                <div className={style.list__title__name}>{name}</div>
            </div>
            <div className={style.list__content}>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <Link key={index} href={`/profile/${item.id}`} passHref>
                                <div className={style.list__item} >
                                    <Image
                                        src="/imgtest.png"
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                    />
                                    <div className={style.list__rank}>#{item.rank}</div>
                                    <div className={style.list__info}>
                                        <div className={style.list__name}>{item.name}</div>
                                        <div className={style.list__sub}>{item.subscribers} Lượt đăng ký</div>
                                        <div className={style.list__external}>{item.externalProfileViews} Lượt xem</div>
                                    </div>
                                    <div className={style.list__lop}></div>
                                </div>
                            </Link>
                        )
                    })}
                </Slider>
            </div>
        </div >
    );
};


export default index;
