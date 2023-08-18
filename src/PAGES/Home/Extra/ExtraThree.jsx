import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/bird.png";
import img4 from "../../../assets/1.png";
const ExtraThree = () => {
    const images = [
        img1, img2, img3, img4
    ];
    return (
        <div className='px-24'>
            <div className='w-1/2 mx-auto'>
                <Zoom scale={1.4} indicators={true}>
                    {images.map((each, index) => (
                        <div key={index} style={{ width: "100%" }}>
                            <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                        </div>
                    ))}
                </Zoom>
            </div>
        </div>
    );
};

export default ExtraThree;