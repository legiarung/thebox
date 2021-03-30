import { createAction, handleActions } from 'redux-actions'
import { get } from '../util/api'

export const GET_PROFILEKOL = `GET_PROFILEKOL`
export const getProfileKol = createAction(GET_PROFILEKOL)


export const fetchProfileKol = (id) => async dispatch => {
    try {
        const res = await get(`http://nguyendung300694-001-site1.itempurl.com/api/PornStarProfiles/${id}`)
        dispatch(getProfileKol(res.data))
    } catch (e) {
        console.log('error')
    }
}

interface ConponCampaignState {
    profileKol: {}
}

const initialState: ConponCampaignState = {
    profileKol: {}
}

export default handleActions<ConponCampaignState>(
    {
        [GET_PROFILEKOL]: (state, { payload }) => ({
            ...state,
            profileKol: payload
        })
    },
    initialState
)