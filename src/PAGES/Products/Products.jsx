// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';

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
        <> <Navbar></Navbar>
            <div className='bg-green-100 px-16'>

                <p className='text-4xl font-semibold text-center uppercase'>Our Products</p>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>
                    {
                        data.map(product => <div
                            key={product._id}
                        >
                            <div className="card w-96 glass shadow-xl">
                                <figure className='mt-3'>
                                    <img src={product.image} alt="car!" className='rounded-xl' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name.toUpperCase()}</h2>
                                    <p>Catagory:{product.catagory}</p>
                                    <p>{product.description.slice(0, 55)}...</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-success">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )

                    }
                </div>
            </div>
        </>
    );
};

export default Products;