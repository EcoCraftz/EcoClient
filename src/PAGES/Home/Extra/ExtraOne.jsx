import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { useNavigate } from 'react-router-dom';
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




const ExtraOne = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["juteProducts"],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/products');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSelected = (id) => {
        navigate(`/products/${id}`);
    }
    return (
        <motion.div style={{ backgroundColor: '#ABEBC6' }}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-4 rounded-2xl shadow-xl shadow-slate-200 my-8">


            <h2 className="text-2xl font-serif ms-4">About Jute Products</h2>

            <p className="text-md font-semibold ms-8 flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto laboriosam accusamus dolorum eveniet veniam eius voluptas nemo nobis molestias iusto quasi, necessitatibus quia rerum ipsa amet quibusdam dignissimos minus.</p>


            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} duration={2000}>
                {data.map((each, index) => (
                    <div className="card card-compact glass shadow-xl min-h-full" key={index} style={{ width: "98%" }}>
                        <div className="card-body">
                            <img onClick={() => handleSelected(each?._id)}
                                style={{ objectFit: "cover", width: "95%", height: "180px", borderRadius: "20px" }} alt="Slide Image" src={each?.image} className="mx-auto cursor-pointer" />
                        </div>
                    </div>
                ))}
            </Slide>
        </motion.div>
    );
};

export default ExtraOne;

{/* <div key={index} style={{ width: "100%" }}>
<img style={{ objectFit: "cover", width: "95%", height: "180px" }} alt="Slide Image" src={each} className="mx-auto" />
</div> */}


