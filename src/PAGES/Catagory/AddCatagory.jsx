import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";

const AddCatagory = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["catagory"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/insertedCatagory`);
            const data = await res.json();
            return data;
        }
    });


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const item = form.catagory.value.toLowerCase();
        const insertedItem = {
            item: item
        };
        e.target.reset();

        fetch('http://localhost:4000/insertedCatagory', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(insertedItem)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                alert(`${item} is inserted successfully`);
                refetch();
            }
        })

    }

    const handleDelete = (id, item) => {
        console.log(id);
        const procced = confirm(`Are you sure to Delete ${item}!`);
        if (procced) {
            fetch(`http://localhost:4000/insertedCatagory/${id}`, {
                method: 'DELETE',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert(`${item} is deleted`);
                        refetch();
                    }
                })
        }
    }

    return (
        <div className="flex lg:flex-row flex-col lg:justify-evenly justify-start items-center p-5 bg-gradient-to-t from-amber-700 via-lime-400 to-violet-300">
            <div className="lg:min-h-screen flex flex-row items-center">
                <div>
                    <h1 className="text-3xl font-semibold mb-5">Add Here</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Type here" name="catagory" className="input input-bordered input-accent w-full" />
                        <input type="submit" value="add" className="btn btn-sm btn-success my-5" />
                    </form>
                </div>
            </div>
            <div className="lg:min-h-screen grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                {data.map((catagory, index) => <div key={catagory._id} className="card lg:w-96 glass">

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{index + 1}.{catagory.item}</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Edit</button>
                            <button onClick={() => handleDelete(catagory._id, catagory.item)} className="btn btn-sm btn-error">Delete</button>
                        </div>
                    </div>
                </div>)}

            </div>


        </div>
    );
};

export default AddCatagory;
