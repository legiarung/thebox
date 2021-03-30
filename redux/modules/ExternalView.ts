import { createAction, handleActions } from 'redux-actions'
import { get } from '../util/api'

export const GET_EXTERNALVIEW = `GET_EXTERNALVIEW`
export const getExternalView = createAction(GET_EXTERNALVIEW)


export const fetchExternalView = () => async dispatch => {
    try {
        const res = await get(`http://nguyendung300694-001-site1.itempurl.com/api/PornStars/get-top-pornstar-by-external-views`)
        dispatch(getExternalView(res.data))
    } catch (e) {
        console.log('error')
    }
}

interface ConponCampaignState {
    externalview: []
}

const initialState: ConponCampaignState = {
    externalview: []
}

export default handleActions<ConponCampaignState>(
    {
        [GET_EXTERNALVIEW]: (state, { payload }) => ({
            ...state,
            externalview: payload
        })
    },
    initialState
)