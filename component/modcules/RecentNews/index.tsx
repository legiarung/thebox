import React from 'react';
import style from './RecentNews.module.scss'


const index = () => {
    return (
        <div className={style.news}>
            <div className={style.news__title}>
                <div className={style.news__title__name}>Gần Đây</div>
            </div>
            <div className={style.news__content}>
                <div className={style.news__item}>
                    <img className={style.news__img} src="/japan.jpg" />
                    <div>
                        <h3>HOT</h3>
                        <p className={style.news__text} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aspernatur in pariatur? Dicta, placeat eligendi voluptatibus incidunt amet dolore ratione sunt, impedit, asperiores debitis facilis vel rem sed nemo iste!</p>
                    </div>
                </div>
                <div className={style.news__item}>
                    <img className={style.news__img} src="/japan.jpg" />
                    <div>
                        <h3>NEW</h3>
                        <p className={style.news__text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni consequuntur, necessitatibus asperiores, autem obcaecati sit minima aliquid saepe reprehenderit sequi. Quos natus hic iure molestiae dolorem quae magnam doloremque?</p>
                    </div>
                </div>
                <div className={style.news__item}>
                    <img className={style.news__img} src="/japan.jpg" />
                    <div>
                        <h3>HOT</h3>
                        <p className={style.news__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero maxime officia dolores assumenda atque nesciunt doloremque labore. Nostrum quod quam nihil magni odio sunt sit dignissimos incidunt sapiente tenetur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default index;
