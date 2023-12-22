import { useContext } from "react";
import Message from "../Home/Message";
import Navbar from "./Navbar";
import { CataContext } from "../Contexts/CatagoryContext";

const About = () => {
    const { item } = useContext(CataContext);
    console.log(item);
    return (
        <div>
            <Navbar />
            <Message />


        </div>
    );
};

export default About;