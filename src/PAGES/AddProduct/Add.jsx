// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddProduct = (data) => {
        console.log(data);
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=2a3fc4f6e67cf2e4035b828c8ded79ad`;
        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgData => {
            if (imgData.success) {
                console.log(imgData.data.url);

                const product = {
                    name: data.name,
                    catagory: data.catagory,
                    description: data.description,
                    image: imgData.data.url
                };
                fetch('http://localhost:4000/products', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json()).then(data => {
                    if (data.acknowledged) {
                        alert(`${product.name} is inserted under ${product.catagory} catagory successfully`);
                    }
                })
            }
        });
    }
    return (
        <div>
            <h2 className="text-center font-bold text-2xl uppercase mt-5">Add A Product</h2>
            <div className='flex h-screen justify-center items-start'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellat laborum fugit expedita dicta sequi? Consequuntur illum earum dolorum facere amet dignissimos recusandae! Fugiat, veritatis. Rerum quos nostrum dolores quis necessitatibus porro illo inventore officia adipisci! Optio repellat veniam impedit odit voluptate voluptatibus vero, dignissimos expedita, iusto molestias, molestiae facilis.</p> */}

                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Product Name is required"
                                        }

                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    {errors.name?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Catagory</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Catagory here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("catagory", {
                                        required: {
                                            value: true,
                                            message: "Catagory is required"
                                        }

                                    })} />
                                <label className="label">
                                    {errors.catagory?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.catagory.message}</span>}
                                    {errors.catagory?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.catagory.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Short Discription</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    placeholder="description here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Product description is required"
                                        }

                                    })} />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input
                                    type="file"
                                    placeholder="image here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Product image is required"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span
                                        className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    {errors.image?.type === 'pattern' && <span
                                        className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>


                            <input type="submit" value="Add A Product" className='btn w-full max-w-xs bg-green-300 hover:bg-green-600' />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add;