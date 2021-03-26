import React from 'react';
import { fetchProducts } from '../../redux/modules/testStatic'
import Link from 'next/link'

const index = ({ posts }) => {
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
            <Link href={"/testseverside"} passHref>
                <button>chi tiet</button>
            </Link>
        </div>
    );
}

export default index;

export const getStaticProps = async () => {
    const posts = await fetchProducts()
    return {
        props: {
            posts
        }
    }
}
