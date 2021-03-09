import React from 'react';
import style from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

const index = () => {
    return (
        <div className={style.footer__container}>
            <div className={style.footer} >
                <ul className={style.footer__social}>
                    <li className={style.footer__social__li}>
                        <a href="" className={style.footer__social__a}>
                            {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}
                        </a>
                    </li>
                    <li className={style.footer__social__li}>
                        <a href="" className={style.footer__social__a}>
                            {/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
                        </a>
                    </li>
                    <li className={style.footer__social__li}>
                        <a href="" className={style.footer__social__a}>
                            {/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
                        </a>
                    </li>
                </ul>
                <div className={style.footer__author}>
                    <p>Copyright ©2020 TheBox Agency - Perform Agency Vietnam, Alright reverse.</p>
                </div>

            </div>
        </div>
    );
};

export default index;
