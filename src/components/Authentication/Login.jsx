import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='w-[60%] md:w-[40%] lg:w-[30%] mx-auto space-y-6 border border-slate-500 py-10 px-5 my-10'>
            <h4 className='text-center font-bold text-2xl border-b shadow'>Please Login!</h4>
            <form onChange={handleLogin} className='space-y-3'>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className='p-1 border border-slate-500' type="email" name="email" placeholder="Enter email" required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">Password</label>
                    <input className='p-1 border border-slate-500' type="password" name="password" placeholder="password" required />
                </div>
                <div className='text-center'>
                    <button className='border px-10 shadow hover:shadow-sm' type='submit'>Login</button>
                </div>
            </form>
            <div className='text-center'>
                <small>Don't have an account?
                    <Link
                        to='/register'
                        className='text-blue-600 hover:underline'
                    > Register
                    </Link>
                </small>
            </div>
        </div >
    );
};

export default Login;