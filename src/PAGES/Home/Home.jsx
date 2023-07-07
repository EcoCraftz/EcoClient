// eslint-disable-next-line no-unused-vars
import React from 'react';
import bird from "../../assets/bird.png";
import TopBoard from './TopBoard';
// import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import HomeNav from './HomeNav';

const Home = () => {
    // const data = useLoaderData();
    const { data, isLoading } = useQuery({
        queryKey: ["get"],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/get');
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
            <TopBoard></TopBoard>
            <HomeNav></HomeNav>
            <Banner></Banner>


            <p className='my-5 text-center'>ToTal Data:{data.length}</p>

            {
                data.map(user => <div key={user._id} className='text-center text-green-400'>
                    <h3>{user.name}</h3>
                    <i className='text-red-500'>{user.email}</i>
                </div>)
            }

            <div className="card card-compact lg:w-96 sm:w-full bg-base-100 shadow-xl mx-auto mt-10">
                <figure><img src={bird} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;