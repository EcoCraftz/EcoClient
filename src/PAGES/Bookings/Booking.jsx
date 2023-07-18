// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import Navbar from '../Shared/Navbar';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/products/${id}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={data.image} alt="" className='' style={{ height: '400px', width: '350px' }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product</span>
                                </label>
                                <input type="text" value={data.name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Catagory</span>
                                </label>
                                <input type="text" value={data.catagory} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" placeholder='Name Your Need ' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" placeholder='Your Country Name ' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact</span>
                                </label>
                                <input type="number" placeholder='Give Your Contact Number' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm btn-primary">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;