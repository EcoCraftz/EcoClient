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
            slidesToShow: 4,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
];
const images = [
    img1, img2, img3, img4
];
const ExtraOne = () => {
    return (
        <div>
            <h2 className="text-2xl font-serif ms-4">About Jute</h2>
            <p className="text-md font-semibold ms-8 flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto laboriosam accusamus dolorum eveniet veniam eius voluptas nemo nobis molestias iusto quasi, necessitatibus quia rerum ipsa amet quibusdam dignissimos minus.</p>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} duration={2000}>
                {images.map((each, index) => (
                    <div className="card card-compact bg-base-100 shadow-xl min-h-full" key={index} style={{ width: "100%" }}>
                        <div className="card-body">
                            <img style={{ objectFit: "cover", width: "95%", height: "180px", borderRadius: "20px" }} alt="Slide Image" src={each} className="mx-auto" />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default ExtraOne;

{/* <div key={index} style={{ width: "100%" }}>
<img style={{ objectFit: "cover", width: "95%", height: "180px" }} alt="Slide Image" src={each} className="mx-auto" />
</div> */}


