import { createAction, handleActions } from 'redux-actions'
import { get } from '../util/api'

export const GET_INTERNALVIEW = `GET_INTERNALVIEW`
export const getInternalView = createAction(GET_INTERNALVIEW)


export const fetchInternalView = () => async dispatch => {
    try {
        const res = await get(`http://nguyendung300694-001-site1.itempurl.com/api/PornStars/get-top-pornstar-by-internal-views`)
        dispatch(getInternalView(res.data))
    } catch (e) {
        console.log('error')
    }
}

interface ConponCampaignState {
    internalView: []
}

const initialState: ConponCampaignState = {
    internalView: []
}

export default handleActions<ConponCampaignState>(
    {
        [GET_INTERNALVIEW]: (state, { payload }) => ({
            ...state,
            internalView: payload
        })
    },
    initialState
)