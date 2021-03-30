import React from 'react';
import style from './Box.module.scss'


const index = () => {
    return (
        <div className={style.main__box}>
            <div className={style.main__title}>
                <div className={style.main__title__name}>Nổi Bật</div>
            </div>
            <div className={style.main__news}>
                <div className={style.main__item__first}>
                    <img className={style.main__img} src="/imgtest.png" />
                </div>
                <div className={style.main__item}>
                    <img className={style.main__img} src="/japan.jpg" />
                </div>
                <div className={style.main__item}>
                    <img className={style.main__img} src="/asia.jpg" />
                </div>
                <div className={style.main__item}>
                    <img className={style.main__img} src="/imgtest.png" />
                </div>
                <div className={style.main__item}>
                    <img className={style.main__img} src="/imgtest.png" />
                </div>
            </div>
        </div>
    );
};


export default index;
