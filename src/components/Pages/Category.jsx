import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Article from './Article';

const Category = () => {
    // const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews);

    return (
        <div className='flex flex-col gap-3'>
            {
                categoryNews.map((article) => <Article
                    key={article._id}
                    article={article}
                ></Article>)
            }
        </div>
    );
};

export default Category;