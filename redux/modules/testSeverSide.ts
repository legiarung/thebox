import { get } from '../util/api'

export const fetchProducts = async () => {
    try {
        const res = await get('http://nguyendung300694-001-site1.itempurl.com/api/PornStars')
        return res.data
        console.log(res.data)
    } catch (e) {
        console.log('error')
    }
}