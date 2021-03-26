import React, { useEffect } from 'react';
import Layout from '../../component/organisms/Layout/index';
import ProfileKol from '../../component/organisms/ProfileKol/index';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsId } from '../../redux/modules/ProductData'
import { useRouter } from 'next/router'

const Profile = () => {
    const { detail } = useSelector(state => state.ProductData)
    const router = useRouter()
    const { id } = router.query
    console.log(detail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsId(id))
    }, [id])
    return (
        <Layout>
            <div>detail</div>
            <div>{detail.id}</div>
            {/* <ProfileKol /> */}
        </Layout>
    );
}

export default Profile
