import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <div className="min-h-screen flex justify-center items-center bg-white mt-5">
                <div className="p-10 mt-5 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
                    <div className="py-8">
                        <h2 className='pt-4 text-2xl text-center'>Blue-moon</h2>
                    </div>
                    <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail or Phone number" />
                    <div className="flex flex-col space-y-1">
                        <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" />
                        <p className="font-bold text-[#0070ba]">Forgot password?</p>
                    </div>
                    <div className="flex flex-col space-y-5 w-full">
                        <Link to={'/login'}></Link>
                        <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
                        <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                            <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                        </div>
                        <Link to={'/signin'} className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200 text-center">Sign Up</Link>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Login;