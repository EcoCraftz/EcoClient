// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../Contexts/UserContext';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        createUser(email, password).then(result => {
            const user = result.user;
            console.log('registered user', user)
        })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogle = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error));
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 mt-16">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogle} className="btn mb-2"
                                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    style={{
                                        backgroundColor: isHovering ? 'gray' : 'black',
                                        color: isHovering ? 'black' : 'white',
                                    }}
                                >
                                    <span className='text-2xl'><FcGoogle></FcGoogle></span>
                                    Register With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;