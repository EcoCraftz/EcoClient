import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import Loading from "../Shared/Loading";

export const CataContext = createContext();
// eslint-disable-next-line react/prop-types
const CatagoryContext = ({ children }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["catagory"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/insertedCatagory`);
            const data = await res.json();
            return data;
        }
    });

    // useEffect(() => {
    //     const { data, isLoading } = useQuery({
    //         queryKey: ["catagory"],
    //         queryFn: async () => {
    //             const res = await fetch(`http://localhost:4000/insertedCatagory`);
    //             const data = await res.json();
    //             return data;
    //         }
    //     });

    // }, []);


    if (isLoading) {
        return <Loading></Loading>
    }

    const item = Object.assign({}, data);
    return (
        <CataContext.Provider value={item}>
            {children}
        </CataContext.Provider>
    );
};

export default CatagoryContext;