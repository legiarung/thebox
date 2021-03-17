import React from 'react';
import style from './Card.module.scss'


const index = () => {
    return (
        <div className={style.card__item}>
            <div className={style.card__br}>
                <img className={style.card__img} src="/imgtest.png" />
                <div className={style.card__info}>
                    <div className={style.card__name}>Name</div>
                    <div className={style.card__rank}>Rank</div>
                    <div className={style.card__nation}>Quoc Gia</div>
                </div>
                <div className={style.card__lop}></div>
            </div>
        </div>
    );
};


export default index;
