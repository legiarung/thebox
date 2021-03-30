import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileKol } from '../../../redux/modules/ProfileKol'
import { useRouter } from 'next/router'
import AboutProfile from '../../modcules/ProfileContent/AboutProfile/index'
import PostProfile from '../../modcules/ProfileContent/PostProfile/index'
import ImageProfile from '../../modcules/ProfileContent/ImageProfile/index'
import VideoProfile from '../../modcules/ProfileContent/VideoProfile/index'
import style from './Profile.module.scss'
import { HairColorCategories, getKeyByValue } from '../../utils/Define'
var classNames = require('classnames');

const index = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileKol(id))
    }, [id]);
    const { profileKol } = useSelector(state => state.ProfileKol)
    console.log(profileKol.background)

    const [show1, setshow1] = useState(true);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const [show4, setshow4] = useState(false);
    const handleShow1 = () => {
        setshow1(true)
        setshow2(false)
        setshow3(false)
        setshow4(false)
    }
    const handleShow2 = () => {
        setshow2(true)
        setshow1(false)
        setshow3(false)
        setshow4(false)
    }
    const handleShow3 = () => {
        setshow3(true)
        setshow1(false)
        setshow2(false)
        setshow4(false)
    }

    const handleShow4 = () => {
        setshow4(true)
        setshow1(false)
        setshow2(false)
        setshow3(false)

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
                    <img className={style.profile__avatar} src={profileKol.background} onError={e => { e.currentTarget.src = "/imgtest.png"; }} alt={profileKol.pornStarName} />
                    <div className={style.profile__name}>
                        {profileKol.pornStarName}
                        <p className={style.profile__location}>{profileKol.city}</p>
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
                    <div onClick={handleShow4} className={classNames(style.profile__menu__tab, {
                        [style.profile__active]: show4
                    })}>
                        Video
                    </div>
                </div>
                <div className={style.profile__detail}>
                    {show1 && (
                        <AboutProfile profileKol={profileKol} />
                    )}
                    {
                        show2 && (
                            <PostProfile profileKol={profileKol} />
                        )}
                    {
                        show3 && (
                            <ImageProfile profileKol={profileKol} />
                        )
                    }
                    {
                        show4 && (
                            <VideoProfile profileKol={profileKol} />
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default index;
