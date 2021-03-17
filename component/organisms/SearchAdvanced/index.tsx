import React, { useEffect, useState } from 'react';
import Card from '../../modcules/Card/index'
import style from './SearchAdvanced.module.scss'
var classNames = require('classnames');


const index = () => {
    const [navBar, setnavBar] = useState(false);
    const changeNavbar = () => {
        if (window.scrollY > 60) {
            setnavBar(true)
        } else {
            setnavBar(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    });
    return (
        <div className={style.search__container}>
            <div className={style.search__main}>
                <div className={style.search__nav}>
                    <form>
                        <section>
                            <h5>Filters</h5>
                            <section className="mb-4">
                                <h6 className="font-weight-bold mb-3">Condition</h6>
                                <div className="form-check pl-0 mb-3">
                                    <input type="checkbox" className="form-check-input filled-in" id="new" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="new">New</label>
                                </div>
                                <div className="form-check pl-0 mb-3">
                                    <input type="checkbox" className="form-check-input filled-in" id="used" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="used">Used</label>
                                </div>
                                <div className="form-check pl-0 mb-3">
                                    <input type="checkbox" className="form-check-input filled-in" id="collectible" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="collectible">Collectible</label>
                                </div>
                                <div className="form-check pl-0 mb-3 pb-1">
                                    <input type="checkbox" className="form-check-input filled-in" id="renewed" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="renewed">Renewed</label>
                                </div>
                            </section>
                            <section className="mb-4">
                                <h6 className="font-weight-bold mb-3">Price</h6>
                                <div className="slider-price d-flex align-items-center my-4">
                                    <span className="font-weight-normal small text-muted mr-2">$0</span>
                                    <form className="multi-range-field w-100 mb-1">
                                        <input id="multi" className="multi-range" type="range" />
                                    </form>
                                    <span className="font-weight-normal small text-muted ml-2">$100</span>
                                </div>
                            </section>
                        </section>
                    </form>
                </div>
                <div className={style.search__content}>
                    <div className={style.search__noti}>
                        <small>
                            Thông báo: Nền tảng kết nối nhãn hàng - người ảnh hưởng “Influencer Platform” là một trong những dự án lớn của Blue Agency, cần nhiều thời gian công sức và chất xám để hoàn thiện. Ứng dụng và Website đang trong thời gian thử nghiệm và phát triển, cảm ơn quý khách đã tin tưởng và liên hệ đến Blue Agency
                    </small>
                    </div>
                    <div className={style.search__list}>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
