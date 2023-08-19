// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/bird.png";
import img4 from "../../assets/1.png";
import banner01 from '../../assets/banner01.jpg';
import banner02 from '../../assets/banner02.jpg';
import "../Home/Css/Home.css";

const Banner = () => {
    const images = [
        banner01, img1, img2, img3, img4, banner02
    ];
    return (

        < div className='max-h-screen overflow-hidden my-4'>
            <Zoom scale={0.75} indicators={true} duration={1500}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }} className='card card-compact bg-base-100 shadow-xl min-h-full'>
                        <div className='card-body' id='Slide'>
                            <img style={{ objectFit: "cover", width: "90%", borderRadius: "15px" }} alt="Slide Image" src={each} className='mx-auto' />
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Banner;


