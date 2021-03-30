import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageProfile.module.scss'


const index = ({ profileKol }) => {
    return (
        <div className={style.profile__album}>
            <div className={style.profile__album__item}>
                <img className={style.profile__album__img} src="/imgtest.png" />
            </div>
            <div className={style.profile__album__item}>
                <img className={style.profile__album__img} src="/imgtest.png" />
            </div>
            <div className={style.profile__album__item}>
                <img className={style.profile__album__img} src="/imgtest.png" />
            </div>
            <div className={style.profile__album__item}>
                <img className={style.profile__album__img} src="/imgtest.png" />
            </div>
        </div>
    );
};


index.propTypes = {

};


export default index;
