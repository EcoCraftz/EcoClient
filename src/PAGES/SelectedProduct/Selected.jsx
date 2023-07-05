// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';

const Selected = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/products/${id}`);
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
            <Navbar></Navbar>
            <h1 className='text-center text-red-500'>This is selected product page</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{data.name}</h1>
                        <p className="py-6">{data.description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;