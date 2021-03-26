import { get } from '../util/api'

export const fetchProducts = async () => {
    try {
        const res = await get('https://5f34e54a9124200016e190eb.mockapi.io/api/products')
        return res.data
    } catch (e) {
        console.log('error')
    }
}