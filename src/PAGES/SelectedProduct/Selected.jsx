// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';

const Selected = () => {
    const navigate = useNavigate();
    const [others, setOthers] = useState([]);
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/products/${id}`);
            const data = await res.json();
            return data;
        }
    });
    const qCatagory = data?.catagory;
    console.log(qCatagory);

    useEffect(() => {
        const url = `http://localhost:4000/products`;
        fetch(url).then(res => res.json()).then(others => {
            const otherData = others.filter(other => other.catagory !== qCatagory);
            console.log(otherData);
            setOthers(otherData);
        });
    }, [qCatagory])

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleOther = (catagory) => {
        navigate(`/other/${catagory}`);
    }





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
                    </div>
                </div>
            </div>
            <div className='text-4xl font-semibold font-serif text-center text-success mx-auto mt-10 border rounded-xl shadow-lg shadow-yellow-200 lg:w-2/5 sm:w-100'>Our Other Products</div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5'>
                {
                    others.map(other => <div key={other._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={other.image} alt={other.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{other.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-sm btn-primary" onClick={() => handleOther(other.catagory)}>Explore Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Selected;