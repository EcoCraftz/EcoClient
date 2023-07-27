import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
const YourBooking = () => {
    const navigate = useNavigate();
    const { email } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["yourBookingData"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/bookings/${email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleNavigate = (id) => {
        navigate(`/dashboard/bookingDetails/${id}`);
    }
    console.log("your data", data)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Booking From</th>
                            <th>Catagory</th>
                            <th>Booking Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(booking => <tr key={booking._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    {/* <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div> */}
                                    <div>
                                        <div className="font-bold">{booking.product}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {booking.country}
                                <br />
                                <span className="badge badge-ghost badge-sm">{booking.email}</span>
                            </td>
                            <td>{booking.catagory}</td>
                            <th>
                                <button onClick={() => handleNavigate(booking._id)} className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default YourBooking;