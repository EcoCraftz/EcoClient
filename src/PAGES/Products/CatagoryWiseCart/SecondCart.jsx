import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { MdReadMore } from "react-icons/md";
const SecondCart = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["cart2"],
        queryFn: async () => {
            const res = await fetch('https://eco-server-ecocraftz.vercel.app/product/ladies bag');
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
        <div className="bg-gradient-to-b from-green-400 via-cyan-400 to-blue-400">
            <div className="">
                <p className="p-3 text-4xl font-semibold">EcoCraftz {data[0].catagory}</p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 lg:ms-5 mt-5'>
                {data.map(item => <div key={item._id}>
                    <div className="card lg:w-96 sm:w-full glass shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>Catagory:{item.catagory}</p>
                            <figure className='mt-3'>
                                <img src={item.image} alt="image" className='rounded-xl' style={{ height: '200px' }} /></figure>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-success"
                                    onClick={() => handleSelected(item._id)}
                                >Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>)}


            </div>
            <div className="flex flex-row justify-center lg:justify-end p-2">
                <button className="btn btn-ghost text-orange-600" onClick={() => navigate(`/other/${data[0].catagory}`)}>see more <span className="text-2xl"><MdReadMore /></span></button>
            </div>
        </div>
    );
};

export default SecondCart;