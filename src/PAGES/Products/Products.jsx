// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
// import ProductCart from './ProductCart';

const Products = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/products');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);
    return (
        <div>
            {
                data.map(product => <div
                    key={product._id}
                >
                    <p>name:{product.name}</p>
                    <img src={product.image} alt="" />
                </div>
                )
            }

        </div>
    );
};

export default Products;