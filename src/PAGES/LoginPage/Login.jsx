// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState();

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        console.log(field, ':', value);
        console.log('from blur function', newUser[field]);
        setUser(newUser)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/add",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }
        ).then(res => res.json()).then(data => console.log(data));
        console.log("from submit function", user);

    }
    return (
        <div>
            <h2>This is our Log in page</h2>
            <div className='p-5 text-center border-5 w-1/2 mx-auto bg-red-200'>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name="name" placeholder='name' required className='mb-3 p-2 border rounded-md border-blue-300' /><br />
                    <input onBlur={handleBlur} type="email" name="email" placeholder='email' required className='mb-3 p-2 border rounded-md border-blue-300' /><br />
                    <input onBlur={handleBlur} type="text" name="address" placeholder='address' required className='mb-3 p-2 border rounded-md border-blue-300' /> <br />
                    <input type="submit" value="Add To DB" className='btn btn-sm btn-success' />
                </form>
            </div>
        </div>
    );
};

export default Login;