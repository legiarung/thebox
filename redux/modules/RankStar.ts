import { createAction, handleActions } from 'redux-actions'
import { get } from '../util/api'

export const GET_RANKSTAR = `GET_RANKSTAR`
export const getRankStar = createAction(GET_RANKSTAR)


export const fetchRankStar = () => async dispatch => {
    try {
        const res = await get(`http://nguyendung300694-001-site1.itempurl.com/api/PornStars/get-top-pornstar-by-rank`)
        dispatch(getRankStar(res.data))
    } catch (e) {
        console.log('error')
    }
}

interface ConponCampaignState {
    rankStar: []
}

const initialState: ConponCampaignState = {
    rankStar: []
}

export default handleActions<ConponCampaignState>(
    {
        [GET_RANKSTAR]: (state, { payload }) => ({
            ...state,
            rankStar: payload
        })
    },
    initialState
)