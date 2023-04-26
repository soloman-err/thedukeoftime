import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='w-[90%] md:w-[40%] lg:w-[30%] mx-auto space-y-6 border border-slate-500 py-10 px-5 mt-20'>
                <h4 className='text-center font-bold text-2xl border-b shadow'>Please Register!</h4>
                <form className='space-y-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name</label>
                        <input className='p-1 border border-slate-500' type="name" name="name" placeholder="Enter name" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input className='p-1 border border-slate-500' type="email" name="email" placeholder="Enter email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Password</label>
                        <input className='p-1 border border-slate-500' type="password" name="password" placeholder="password" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Confirm password</label>
                        <input className='p-1 border border-slate-500' type="password" name="confirm-pass" placeholder="password" required />
                    </div>
                    <div className='text-center'>
                        <button className='border px-10 shadow hover:shadow-sm' type='submit'>Register</button>
                    </div>
                </form>
                <div className='text-center'>
                    <small>Already have an account?
                        <Link
                            to='/login'
                            className='text-blue-600 hover:underline'
                        > Login
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Register;