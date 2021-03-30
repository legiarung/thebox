import React from 'react';
import style from './HighlightNews.module.scss'


const index = () => {
    return (
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
    );
};


export default index;
