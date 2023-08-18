import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/bird.png";
import img4 from "../../../assets/1.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
const images = [
    img1, img2, img3, img4
];
const ExtraOne = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} >
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "80%", height: "180px" }} alt="Slide Image" src={each} className="mx-auto" />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default ExtraOne;