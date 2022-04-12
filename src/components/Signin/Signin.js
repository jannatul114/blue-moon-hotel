import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';

const Signin = () => {
    const [user, setUser] = useState({});
    console.log(user);
    const googleProvider = new GoogleAuthProvider();

    const hangleGoogleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>

            <body className="font-mono bg-white">

                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">


                            <img className="w-full h-auto bg-white-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />

                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                    {/* <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div> */}
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                            />
                                            <p className="text-xs italic text-red-500">Please choose a password.</p>
                                        </div>
                                        {/* <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="c_password"
                                                type="password"
                                                placeholder="******************"
                                            />
                                        </div> */}
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Register Account
                                        </button>
                                        <button onClick={hangleGoogleSignin}
                                            className="mt-3 w-full px-4 py-2 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Sign-in with Google
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/login'}>Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Signin;