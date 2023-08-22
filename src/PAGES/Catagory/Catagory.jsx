// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/logo_prevew.png';

const Catagory = () => {
    const navigate = useNavigate();
    const handleClick = catagory => {
        navigate(`/other/${catagory}`)
    }
    return (
        <div className="hero max-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-60">
                <div className="hero-content flex-col lg:hidden mx-4 mt-10">
                    <div onClick={() => handleClick("chandor")}
                        className='mx-auto text-center p-4 bg-orange-500 w-1/2 cursor-pointer uppercase'>chandor</div>

                    <div onClick={() => handleClick("pot")}
                        className='bg-red-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase'>pot</div>

                    <div onClick={() => handleClick("sataronji")}
                        className='bg-green-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase'>sataronji</div>

                    <div onClick={() => handleClick("ladies bag")}
                        className='bg-blue-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase'>ladies bag</div>

                    <div onClick={() => handleClick("papose")}
                        className='bg-amber-500 w-1/2 mx-auto text-center p-4 cursor-pointer uppercase'>papose</div>

                </div>

            </div>
        </div>
    );
};

export default Catagory;