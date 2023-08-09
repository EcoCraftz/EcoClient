import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading";
import { useNavigate } from "react-router-dom";

const UserBooking = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/bookings`);
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
    return (

        <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                {/* head */}
                <thead>
                    <tr className="text-indigo-500">
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
    );
};

export default UserBooking;