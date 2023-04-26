import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Article from './Article';


const Home = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div className='flex flex-col gap-3'>
            {
                news.map((article, index) => <Article
                    key={index}
                    article={article}
                >{article.title}</Article>)
            }
        </div>
    );
};

export default Home;