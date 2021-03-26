import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/modules/ProductData'
import Link from 'next/link'


const index = () => {
    const { campaigns }: any = useSelector(state => state.ProductData)
    console.log(campaigns)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const abc = campaigns.map(item => {
        return (
            <div key={item.id}>
                <div>Card</div>
                <div>{item.title}</div>
                <div>{item.name}</div>
                <Link href={`/profile/${item.id}`} passHref>
                    <button>chi tiet</button>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {abc}
        </div>
    );
};


export default index;
