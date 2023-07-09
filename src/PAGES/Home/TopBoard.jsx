// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FcClock } from 'react-icons/fc';

const TopBoard = () => {
    return (
        <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-zinc-800 flex flex-row justify-between px-5 items-center fixed top-0 w-full z-10">
            <div>
                <div className='text-xl font-mono text-black flex flex-row justify-center items-center gap-2'>
                    <h1><FcClock></FcClock></h1>
                    <h1>Clock</h1></div>
            </div>
            <div>
                <div className='text-lg font-serif text-white flex flex-row justify-start items-center gap-2'>
                    <h1><SiMinutemailer></SiMinutemailer></h1>
                    <h1>xyz@gmail.com</h1>
                </div>
                <div className='text-lg font-serif text-white flex flex-row justify-start items-center gap-2'>
                    <h1><BiSolidPhoneCall></BiSolidPhoneCall></h1>
                    <h1>01111111111</h1>
                </div>
            </div>

        </div>
    );
};

export default TopBoard;