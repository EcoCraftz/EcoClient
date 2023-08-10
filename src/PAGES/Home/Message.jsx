// eslint-disable-next-line no-unused-vars
import React from 'react';
import bird from "../../assets/bird.png";
import bg from "../../assets/banner02.jpg";
import { motion } from 'framer-motion';

const Message = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-16 min-h-screen my-8 bg-base-100">
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content flex-col lg:flex-row-reverse  border rounded-xl shadow-2xl">
                    <img src={bird} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Message From Chairman</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content flex-col lg:flex-row border rounded-xl shadow-2xl" >
                    <img src={bird} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Message From Manager</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card w-full bg-base-100 shadow-xl image-full mb-4">
                <figure><img src={bg} alt="BG" /></figure>
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-white">Our Vission</h1>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </motion.div>

        </div>
    );
};

export default Message;