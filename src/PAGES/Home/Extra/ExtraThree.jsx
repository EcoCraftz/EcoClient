import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/bird.png";
import img4 from "../../../assets/1.png";
const ExtraThree = () => {
    const images = [
        img1, img2, img3, img4
    ];
    return (
        <div className="mx-4 mt-14 mb-6">
            <div className="text-2xl font-serif font-semibold w-fit mx-auto my-4 border-b border-b-amber-500">Our Beloved Customers</div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    images.map((img, index) => <div key={index}>
                        <img src={img} alt="" className="w-full rounded-xl shadow-xl shadow-white" />
                    </div>)
                }
            </div>
        </div>

    );
};

export default ExtraThree;