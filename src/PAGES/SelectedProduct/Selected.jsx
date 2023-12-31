// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import ReactImageMagnify from 'react-image-magnify';
import './CSS/Selected.css';
import { FaRegHandPointer } from 'react-icons/fa';
import { GoStack } from 'react-icons/go';

const Selected = () => {
    const navigate = useNavigate();
    const [others, setOthers] = useState([]);
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/products/${id}`);
            const data = await res.json();
            return data;
        }
    });
    const qCatagory = data?.catagory;
    console.log(data?.leadtime?.p1);

    useEffect(() => {
        const url = `https://eco-server-ecocraftz.vercel.app/otherProducts`;
        fetch(url).then(res => res.json()).then(others => {
            const otherData = others.filter(other => other.catagory !== qCatagory);
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
        <div className='bg-gradient-to-tl from-green-200 via-green-300 to-blue-500'>
            <Navbar></Navbar>
            <div className='mt-4'>
                <h1 className='text-3xl font-semibold text-center p-2'><span className='border-b-2 border-b-black'><span className='uppercase text-green-700'>{data.name}</span> Full Spacificaion</span></h1>
                <div id='topDiv' className='mx-2 grid lg:grid-cols-3 sm:grid-cols-1 sm:overflow-hidden justify-start items-start p-4'
                    style={{ height: '100vh' }}>
                    <div id='imgHolder' className="mx-auto" style={{ width: '350px', height: '300px' }}>
                        <ReactImageMagnify  {...{
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
                    <div className='border border-blue-500 border-l-4 border-b-4 lg:w-11/12 lg:p-2'>
                        <h1 className='text-xl font-sans font-bold uppercase me-10'>Product Code: {data?.code}</h1>
                        <ul className='list-disc list-outside ms-6'>
                            <li><span className='font-bold py-4'>Material: </span>{data?.material}</li>
                            <li><span className='font-bold py-4'>Imprint: </span>{data?.imprint}</li>
                            <li><span className='font-bold py-4'>External Dimention: </span>{data?.external}</li>
                            <li><span className='font-bold py-4'>Internal Dimention: </span>{data?.internal}</li>
                            <li><span className='font-bold py-4'>Weight: </span>{data?.weight}</li>
                            <li><span className='font-bold py-4'>Packeging: </span>{data?.packing}</li>



                        </ul>
                    </div>
                    <div id='topDivDetails' className='flex flex-wrap justify-start items-center'>
                        <h1 className='text-2xl font-serif font-bold uppercase me-10 border-2 border-orange-600 rounded-ss-2xl rounded-ee-2xl p-1'>Short description</h1>
                        <p className='text-lg me-5'>{data.description}</p>
                        <div className='flex flex-col gap-2 mt-4 me-10'>
                            <div>
                                <button onClick={() => handleBooking(data._id)}
                                    className='btn btn-sm bg-purple-600 hover:bg-teal-600 text-white'>
                                    <span><GoStack></GoStack></span>Booking Now
                                </button>
                            </div>
                            <div className='animate-bounce flex flex-col justify-center items-center'>
                                <span className='text-2xl text-green-500'> <FaRegHandPointer></FaRegHandPointer></span>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

            <div id='otherProducts' className='pb-2'>
                <div className='text-4xl font-semibold font-serif text-center text-teal-800 mx-auto border rounded-xl border-yellow-200 shadow-md shadow-yellow-200 lg:w-2/5 sm:w-100'>Our Other Products</div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mt-5 lg:mx-10 mx-auto'>
                    {
                        others.map(other => <div key={other._id} className="card w-96 glass shadow-xl">
                            <figure className='transition ease-in-out delay-300 hover:translate-x-4 hover:translate-y-4 hover:scale-125 duration-300 overflow-hidden px-10 pt-10'>
                                <img src={other.image} alt={other.name} className="rounded-xl h-32"

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