import React, { useEffect } from 'react';
import Rank from '../../modcules/Rank/index'
import RecentNews from '../../modcules/RecentNews/index'
import HighlightNews from '../../modcules/HighlightNews/index'
import Social from '../../modcules/Social/index'
import Box from '../../modcules/Box/index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRankStar } from '../../../redux/modules/RankStar'
import { fetchInternalView } from '../../../redux/modules/InternalView'
import { fetchExternalView } from '../../../redux/modules/ExternalView'


import style from './Product.module.scss'


const index = () => {
    const { rankStar } = useSelector(state => state.RankStar)
    const { internalView } = useSelector(state => state.InternalView)
    const { externalview } = useSelector(state => state.ExternalView)

    const dispatch = useDispatch()

    useEffect(() => {
        const f = async () => {
            await dispatch(fetchRankStar())
            await dispatch(fetchInternalView())
            dispatch(fetchExternalView())
        }
        f()
    }, [])

    return (
        <div className={style.list__container}>
            <div className={style.banner__box}>
                <img className={style.banner__img} src="/banner.jpg" />
            </div>
            <Box />
            <div className={style.list__selection}>
                <div className={style.list__top}>
                    <Rank name="Diễn viên xếp hạng cao nhất" data={rankStar} />
                    <Rank name="Diễn viên được yêu thích nhất (thống kê từ TheBox)" data={internalView} />
                    <Rank name="Diễn viên được yêu thích nhất thống kê từ TheBox" data={externalview} />
                    <Rank name="Diễn viên trẻ nổi bật" data={rankStar} />
                </div>
                <RecentNews />
                <HighlightNews />
                <Social />
            </div>
        </div >
    );
};

export default index;
