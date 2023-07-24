// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../Shared/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import "./CSS/SideBar.css";
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import { getAuth } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
const DashbordLayout = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/profile/${email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open mt-16">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content" id='sidebar-menu'>
                        {/* Sidebar content here */}
                        {/* eslint-disable-next-line react/prop-types */}
                        <li><NavLink to={data?.link ? `/dashboard/updateProfile/${email}` : `/dashboard/userProfile`}>User Profile</NavLink></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashbordLayout;