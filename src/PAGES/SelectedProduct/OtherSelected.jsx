// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const OtherSelected = () => {
    const { catagory } = useParams();
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
    return (
        <div>

            {
                data.map(other => <div key={other._id}>
                    <img src={other.image} alt="" />
                </div>)
            }

        </div>
    );
};

export default OtherSelected;