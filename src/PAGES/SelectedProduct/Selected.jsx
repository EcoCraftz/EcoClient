// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import ReactImageMagnify from 'react-image-magnify';
import './CSS/Selected.css';

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

    const handleBooking = (id) => {
        navigate(`/booking/${id}`);
    }
    const imgURL = data.image;

    return (
        <div>
            <Navbar></Navbar>

            <div id='topDiv' className='mx-2 grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center border shadow-xl'
                style={{ height: '100vh' }}>
                <div id='imgHolder' className="mx-auto border-2 rounded-2xl shadow-xl shadow-gray-400" style={{ width: '350px', height: '300px' }}>
                    <ReactImageMagnify className='w-full h-full' {...{
                        smallImage: {
                            alt: `${data.name}`,
                            isFluidWidth: true,
                            src: imgURL,
                        },
                        largeImage: {
                            src: imgURL,
                            width: 600,
                            height: 800
                        },

                    }} />
                </div>
                <div id='topDivDetails' className='flex flex-wrap justify-start items-center gap-2'>
                    <h1 className='text-5xl font-serif font-bold uppercase'>{data.name}</h1>
                    <p className='text-xl'>{data.description}</p>
                    <button onClick={() => handleBooking(data._id)}
                        className='btn btn-sm bg-purple-600 hover:bg-teal-600 text-white'>Booking Now</button>


                </div>

            </div>

            <div id='otherProducts'>
                <div className='text-4xl font-semibold font-serif text-center text-success mx-auto mt-10 border rounded-xl shadow-lg shadow-yellow-200 lg:w-2/5 sm:w-100'>Our Other Products</div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5'>
                    {
                        others.map(other => <div key={other._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={other.image} alt={other.name} className="rounded-xl max-w-50 w-32 h-32"

                                />

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




        </div>
    );
};

export default Selected;