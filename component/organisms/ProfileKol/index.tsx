import React, { useState } from 'react';
import style from './Profile.module.scss'
var classNames = require('classnames');

const index = () => {
    const [show1, setshow1] = useState(true);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const handleShow1 = () => {
        console.log('hehe')
        setshow1(true)
        setshow2(false)
        setshow3(false)
    }
    const handleShow2 = () => {
        setshow2(true)
        setshow1(false)
        setshow3(false)
    }
    const handleShow3 = () => {
        console.log('hehe')
        setshow3(true)
        setshow1(false)
        setshow2(false)
    }
    return (
        <div className={style.profile__container}>
            <div className={style.profile__box}>
                <div className={style.profile__backround}>
                    <div className={style.profile__img}>
                    </div>
                    <div className={style.profile__icon}>
                        <a className={style.profile__icon__flow}>
                            Followers
                        </a>
                        <a className={style.profile__icon__rp}>
                            Report
                        </a>
                    </div>
                </div>
                <div className={style.profile__user}>
                    <div className={style.profile__avatar}>
                    </div>
                    <div className={style.profile__name}>
                        Trần Huyền Phương Linh
                        <p className={style.profile__location}>HCM</p>
                    </div>
                </div>
                <div className={style.profile__info}>
                    <ul className={style.profile__info__ul}>
                        <li className={style.profile__info__li}>
                        </li>
                        <li className={style.profile__info__li}>
                        </li>
                        <li className={style.profile__info__li}>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.profile__box}>
                <div className={style.profile__menu}>
                    <div onClick={handleShow1} className={classNames(style.profile__menu__tab, {
                        [style.profile__active]: show1
                    })}>
                        Giới Thiệu
                    </div>
                    <div onClick={handleShow2} className={classNames(style.profile__menu__tab, {
                        [style.profile__active]: show2
                    })}>
                        Bài Viết
                    </div>
                    <div onClick={handleShow3} className={classNames(style.profile__menu__tab, {
                        [style.profile__active]: show3
                    })}>
                        Ảnh
                    </div>
                </div>
                <div className={style.profile__detail}>
                    {show1 && (
                        <div className={style.profile__description}>
                            Thông báo: Nền tảng kết nối nhãn hàng - người ảnh hưởng “Influencer Platform” là một trong những dự án lớn của Blue Agency, cần nhiều thời gian công sức và chất xám để hoàn thiện. Ứng dụng và Website đang trong thời gian thử nghiệm và phát triển, cảm ơn quý khách đã tin tưởng và liên hệ đến Blue Agency
                        </div>
                    )}
                    {
                        show2 && (
                            <div className={style.profile__content}>
                                Quỳnh Anh Shyn tên thật là Phí Quỳnh Anh cái tên rất nổi bật trong lứa hot girl thế hệ mới của Hà Nội từ những năm 2010. Cô nàng xuất hiện với mật độ phủ sóng dày đặc trên khắp các mặt báo dành cho tuổi teen.  Quỳnh Anh Shyn tên thật là Phí Quỳnh Anh, sinh ngày 2/12/1996 tại Hà Nội.
                                Xuất hiện trong thời kỳ danh hiệu hot girl nhiều như nấm sau mưa, Quỳnh Anh Shyn nổi bật với gương mặt bầu bĩnh, dễ thương và lực học tương đối ổn. Cô nàng nhanh chóng nhận được sự ủng hộ nhiệt tình từ phía cư dân mạng.

                                Ngoài ra cô được biết đến là một vlogger làm đẹp được theo dõi đông đảo trên youtube, cô nàng chủ yếu chia sẻ về bí quyết trang điểm.  Với phong cách make-up đa dạng phù hợp với từng độ tuổi, hoàn cảnh,… nên Quỳnh Anh đã nhận được sự quan tâm và mến mộ của nhiều chị em phụ nữ.
                                Cô từng học tại Trường THCS Giảng Võ, FPT School Bussiness - FSB.


                                
                                Cô gái sinh năm 1996 này bắt đầu tiếp xúc với nghệ thuật qua việc làm người mẫu ảnh trên nhiều trang mạng.

                                Năm 2015, với vai diễn Tường Vy công chúa trong bộ phim sitcom 5S Online, Quỳnh Anh đã chính thức góp mặt trong lĩnh vực phim truyền hình.

                                Ngoài vẻ đẹp hồn nhiên, trong sáng, Quỳnh Anh Shyn còn rất được chú ý bởi chuyện tình cảm trong mơ cùng hot boy Bê Trần. Tuy nhiên hiên giờ hai người đã chia tay!.
                            </div>)}
                    {
                        show3 && (
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
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default index;
