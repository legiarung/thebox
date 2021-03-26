import React from 'react';
import { fetchProducts } from '../../redux/modules/testSeverSide'

const index = ({ posts }) => {
    console.log(posts)
    return (
        <div>
            {posts.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.name}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default index;

export const getServerSideProps = async () => {
    // const abc = true
    const posts = await fetchProducts()
    // return {
    //     redirect: {
    //         destination: '/login',
    //         statusCode: 302,
    //     }
    // }

    return {
        props: {
            posts
        }
    }
}
