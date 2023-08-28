// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { HiOutlineHome } from 'react-icons/hi';
import { AuthContext } from '../Contexts/UserContext';
import useAdmin from '../NewPages/Hooks/UseAdmin';
import { BiEdit } from 'react-icons/bi';

const OtherSelected = () => {
    const { user } = useContext(AuthContext);
    const [admin] = useAdmin(user);
    const { catagory } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["other"],
        queryFn: async () => {
            const res = await fetch(`https://eco-server-ecocraftz.vercel.app/other/${catagory}`);
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

    const handleEdit = id => {
        navigate(`/dashboard/editSelected/${id}`);
    }

    const handleDelete = (id, name) => {
        console.log(id);
        const procced = confirm(`Are you sure to Delete ${name}!`);
        if (procced) {
            fetch(`https://eco-server-ecocraftz.vercel.app/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert(`${name} is deleted`);
                        refetch();
                    }
                })
        }
    }
    return (
        <>
            <div className='flex lg:flex-row lg:justify-start sm:flex-col sm:justify-center items-center gap-20 p-6'>
                <button onClick={() => navigate('/')} className='btn btn-sm btn-warning'>
                    <HiOutlineHome></HiOutlineHome>Home</button>
                {/* {user?.displayName && <span>Welcome {user.displayName}</span>} */}
                <h1 className='uppercase text-2xl font-serif font-bold'>Explore Our {catagory} </h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5'>

                {
                    data.map(other => <div key={other._id} className="card lg:w-96 sm:w-full glass shadow-xl">
                        <figure className='transition ease-in-out delay-100 hover:translate-x-4 hover:scale-110 duration-300 overflow-hidden mt-3'>
                            <img onClick={() => handleSelected(other._id)} src={other.image} alt="car!" className='rounded-xl max-w-xs' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{other.name.toUpperCase()}</h2>
                            <p>Catagory:{other.catagory}</p>
                            <p>{other.description.slice(0, 55)}...</p>
                            <div className="card-actions justify-start overflow-hidden">
                                {admin ? <button className="btn btn-sm btn-warning"
                                    onClick={() => handleEdit(other._id)}
                                >Edit<BiEdit /></button>
                                    : <button className="btn btn-sm btn-success"
                                        onClick={() => handleSelected(other._id)}
                                    >Learn More</button>}
                                {admin && <button onClick={() => handleDelete(other._id, other.name)}

                                    className='btn btn-sm btn-error'>Delete</button>}
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </>
    );
};

export default OtherSelected;