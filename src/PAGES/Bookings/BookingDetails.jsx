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
                    if (deleted.deletedCount) {
                        <div className="toast toast-top toast-start">
                            <div className="alert alert-success">
                                <span>{data.product} is successfully Deleted.</span>
                            </div>
                        </div>

                    }
                    { admin ? navigate(`/dashboard/userBooking`) : navigate(`/dashboard/yourBooking/${email}`) }
                })
        }
    }







    console.log("SELECTED BOOKING", email);
    return (
        <div className='flex flex-row gap-4 justify-center items-center bg-green-200 w-3/4 my-4 mx-auto p-5 border rounded-2xl shadow-2xl'>
            <div>
                <img src={data?.image} alt="Product image" className='w-56 h-56 border-e-4 rounded-lg shadow-lg' />
            </div>
            <div>
                <p className='text-2xl font-thin'>Product ID:{data._id}</p>
                <p className='uppercase font-serif text-xl'>{data.product}</p>
                <p>Catagory: <span className='font-semi-bold text-xl'>{data.catagory}</span></p>
                <p>Quantity: <span className='font-bold text-lg'>{data.quantity}</span></p>
                <div className='mt-6'>
                    <button htmlFor="delete-user" onClick={() => handleDelete(data._id)} className='btn btn-sm btn-error'>Delete</button>
                </div>

            </div>

        </div>
    );
};

export default BookingDetails;