import FifthCart from "./CatagoryWiseCart/FifthCart";
import FirstCart from "./CatagoryWiseCart/FirstCart";
import ForthCart from "./CatagoryWiseCart/ForthCart";
import SecondCart from "./CatagoryWiseCart/SecondCart";
import ThirdCart from "./CatagoryWiseCart/ThirdCart";


const ProductCart = () => {
    return (
        <div>
            <FirstCart></FirstCart>
            <SecondCart></SecondCart>
            <ThirdCart></ThirdCart>
            <ForthCart></ForthCart>
            <FifthCart></FifthCart>

        </div>
    );
};

export default ProductCart;