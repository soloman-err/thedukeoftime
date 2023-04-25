import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='md:sticky md:top-1 space-y-1 w-full'>
            <h4 className='bg-slate-100 border-b border-slate-300 shadow font-bold'>Categories</h4>
            <div className='grid grid-cols-2 md:flex md:flex-col gap-2'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link
                            to={`/category/${category.id}`}
                            className='border w-full flex justify-start px-2'
                        >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;