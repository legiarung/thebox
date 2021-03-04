import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, } from '../../../redux/modules/ProductData'
import style from './Menu.module.scss'

const index = () => {
    const { campaigns } = useSelector(state => state.ProductData)
    console.log(campaigns)
    const dispatch = useDispatch()
    console.log(campaigns)

    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [])

    return (
        <div className={style.main__home}>
            <div className='container'>
                <div className="row">
                    <div className={style.noti}>
                        <small>
                            Thông báo: Nền tảng kết nối nhãn hàng - người ảnh hưởng “Influencer Platform” là một trong những dự án lớn của Blue Agency, cần nhiều thời gian công sức và chất xám để hoàn thiện. Ứng dụng và Website đang trong thời gian thử nghiệm và phát triển, cảm ơn quý khách đã tin tưởng và liên hệ đến Blue Agency
                    </small>
                    </div>
                    <div className={style.submenu}>
                        <ul className={style.submenu__ul}>
                            <li className={style.submenu__li}>Micro</li>
                            <li className={style.submenu__li}>Premium</li>
                            <li className={style.submenu__li}>Community</li>
                        </ul>
                        <div className="contactnow">
                            <button>Facebook</button>
                            <button>Fitter</button>
                        </div>
                    </div>
                    <div className={style.list__kol}>
                        <div className={style.product__item}>
                            <div className={style.product__br}>
                                <img src='' />
                            </div>
                            <div className={style.infokol}>
                                <div className={style.namekol}>Why So Serious</div>
                                <div className={style.flowkol}>2.400.000 Followers </div>
                            </div>

                        </div>
                        <div className={style.product__item}>
                            <div className={style.product__br}>
                                <img src='' />
                            </div>
                            <div className={style.infokol}>
                                <div className={style.namekol}>Why So Serious</div>
                                <div className={style.flowkol}>2.400.000 Followers </div>
                            </div>

                        </div>
                        <div className={style.product__item}>
                            <div className={style.product__br}>
                                <img src='' />
                            </div>
                            <div className={style.infokol}>
                                <div className={style.namekol}>Why So Serious</div>
                                <div className={style.flowkol}>2.400.000 Followers </div>
                            </div>

                        </div>
                        <div className={style.product__item}>
                            <div className={style.product__br}>
                                <img src='' />
                            </div>
                            <div className={style.infokol}>
                                <div className={style.namekol}>Why So Serious</div>
                                <div className={style.flowkol}>2.400.000 Followers </div>
                            </div>

                        </div>
                        <div className={style.product__item}>
                            <div className={style.product__br}>
                                <img src='' />
                            </div>
                            <div className={style.infokol}>
                                <div className={style.namekol}>Why So Serious</div>
                                <div className={style.flowkol}>2.400.000 Followers </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default index;
