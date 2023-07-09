// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const OtherSelected = () => {
    const { catagory } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["other"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/other/${catagory}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleSelected = (id) => {
        navigate(`/products/${id}`);
    }
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>

            {
                data.map(other => <div key={other._id} className="card lg:w-96 sm:w-full glass shadow-xl">
                    <figure className='mt-3'>
                        <img src={other.image} alt="car!" className='rounded-xl' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{other.name.toUpperCase()}</h2>
                        <p>Catagory:{other.catagory}</p>
                        <p>{other.description.slice(0, 55)}...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-success"
                                onClick={() => handleSelected(other._id)}
                            >Learn More</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default OtherSelected;