import { createAction, handleActions } from 'redux-actions'
import { get, post, remove, put } from '../util/api'

export const SET_CAMPAIGNS = `SET_CAMPAIGNS`
export const SET_DETAIL = `SET_DETAIL`
export const setCampaigns = createAction(SET_CAMPAIGNS)
export const setDetail = createAction(SET_DETAIL)


export const fetchProducts = () => async dispatch => {
    try {
        const res = await get('https://5f34e54a9124200016e190eb.mockapi.io/api/products')
        dispatch(setCampaigns(res.data))
    } catch (e) {
        console.log('error')
    }
}

export const fetchProductsId = (id) => async dispatch => {
    try {
        const res = await get(`https://5f34e54a9124200016e190eb.mockapi.io/api/products/${id}`)
        dispatch(setDetail(res.data))
    } catch (e) {
        console.log('error')
    }
}

// export const AddCampaign = (data) => async dispatch => {
//     console.log(data)
//     try {
//         await post('https://5e83062078337f00160ae8ec.mockapi.io/api/products', data)
//         dispatch(fetchProducts())
//     } catch (e) {
//         console.log('error')
//     }
// }

// export const DeleteCampaign = (id) => async dispatch => {
//     try {
//         await remove(`https://5e83062078337f00160ae8ec.mockapi.io/api/products/${id}`)
//         dispatch(fetchProducts())
//     } catch (e) {
//         console.log('error')
//     }
// }

// export const EditCampaign = (product) => async dispatch => {
//     console.log(product)
//     try {
//         await put(`https://5e83062078337f00160ae8ec.mockapi.io/api/products/${product.id}`, { ...product })
//         dispatch(fetchProducts())
//     } catch (e) {
//         console.log('error', e)
//     }
// }

interface ConponCampaignState {
    campaigns: [],
    detail: {}
}

const initialState: ConponCampaignState = {
    campaigns: [],
    detail: {}
}

export default handleActions<ConponCampaignState>(
    {
        [SET_CAMPAIGNS]: (state, { payload }) => ({
            ...state,
            campaigns: payload
        }),
        [SET_DETAIL]: (state, { payload }) => ({
            ...state,
            detail: payload
        })
    },
    initialState
)