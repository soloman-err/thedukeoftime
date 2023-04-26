import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Article from './Article';


const Home = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div className='flex flex-col gap-3'>
            <div className='md:hidden border-t-2 border-slate-900'>
                <div className='news-tag bg-slate-900 w-32 text-start px-1'>
                    <h4 className='text-white font-bold'>News</h4>
                </div>
            </div>
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