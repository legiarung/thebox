import React from 'react';
import style from './Social.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebookF, faTwitterSquare), faYoutube;


const index = () => {
    return (
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
    );
};


export default index;
