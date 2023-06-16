// eslint-disable-next-line no-unused-vars
import React from 'react';
import bird from "../../assets/bird.png";
import TopBoard from './TopBoard';
import Navbar from '../Shared/Navbar';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <TopBoard></TopBoard>
            <Navbar></Navbar>


            <p className='my-5 text-center'>ToTal Data:{data.length}</p>

            {
                data.map(user => <div key={user._id} className='text-center text-green-400'>
                    <h3>{user.name}</h3>
                    <i className='text-red-500'>{user.email}</i>
                </div>)
            }

            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-10">
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