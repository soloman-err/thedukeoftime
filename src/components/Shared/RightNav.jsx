import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const RightNav = () => {
    const { googleSignIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='space-y-3 md:sticky md:top-1'>
            <div>
                <h4 className='text-start font-bold
            '>Login with</h4>
                <div className='space-y-1'>
                    <button onClick={handleGoogleSignIn} className='border w-full flex items-center justify-center gap-1 text-sm p-1 hover:shadow'>
                        <FaGoogle />
                        Login with Google
                    </button>
                    {/* <br /> */}
                    <button className='border w-full flex items-center justify-center gap-1 text-sm p-1 hover:shadow'>
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