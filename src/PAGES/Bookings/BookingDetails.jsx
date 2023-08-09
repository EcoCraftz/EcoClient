import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../NewPages/Hooks/UseAdmin';


const BookingDetails = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [admin] = useAdmin(user);
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["BookingDetails"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/details/${id}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleEdit = (id) => {
        navigate(`/dashboard/editBooking/${id}`)
    }


    const handleDelete = id => {
        const procced = confirm(`Do you want to delete ${data.product} of ${id}`);
        if (procced) {
            fetch(`http://localhost:4000/deleteBooking/${id}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(deleted => {
                    if (deleted.deletedCount) { admin ? navigate(`/dashboard/userBooking`) : navigate(`/dashboard/yourBooking/${email}`) }
                })
        }
    }
    console.log("SELECTED BOOKING", email);
    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={data?.image} alt="Product image" className='w-56 h-56 border-e-4 rounded-lg shadow-lg' />
                <div>
                    <p className='text-2xl font-thin'>Product ID:{data._id}</p>
                    <p className='uppercase font-serif text-xl'>{data.product}</p>
                    <p>Catagory: <span className='font-semi-bold text-xl'>{data.catagory}</span></p>
                    <p>Customer Email: <span className='font-serif text-sm text-blue-700'>{data.email}</span></p>
                    <p>Booking From: <span className='font-serif text-sm text-green-800'>{data.country}</span></p>

                    <p className='text-lg'>Contact: <span className='text-xl text-gray-900'>
                        {data.contact}</span></p>

                    <p className='text-2xl'>Quantity: <span className='font-bold text-lg'>{data.quantity}</span></p>
                    <div>
                        {admin ? <div className='mt-6'>
                            <button onClick={() => handleDelete(data._id)} className='btn btn-sm btn-error'>Delete</button>
                        </div>
                            : <div className='mt-6'>
                                <button onClick={() => handleEdit(data._id)} className='btn btn-sm btn-warning'>Edit</button>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;