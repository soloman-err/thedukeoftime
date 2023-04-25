import React from 'react';
import { Fa500Px, FaFacebook, FaGithub, FaGithubAlt, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightNav = () => {
    return (
        <div className='space-y-3 md:sticky md:top-1'>
            <div>
                <h4 className='text-start font-bold
            '>Login with</h4>
                <div className='space-y-1'>
                    <button className='border w-full flex items-center justify-center gap-1 text-sm p-1'>
                        <FaGoogle />
                        Login with Google
                    </button>
                    {/* <br /> */}
                    <button className='border w-full flex items-center justify-center gap-1 text-sm p-1'>
                        <FaGithub />
                        Login with Github
                    </button>
                </div>
            </div>
            <div>
                <h4 className='text-start font-bold'>Find us on</h4>
                <div className='flex flex-col text-start text-sm'>
                    <Link className='border p-1 flex items-center gap-1'>
                        <FaFacebook />
                        Facebook
                    </Link>
                    <Link className='border-x p-1 flex items-center gap-1'>
                        <FaTwitter />
                        Twitter
                    </Link>
                    <Link className='border p-1 flex items-center gap-1'>
                        <FaInstagram />
                        Instagram
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RightNav;