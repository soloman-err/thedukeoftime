import React, { useEffect, useState } from 'react';
import Article from './Article';


const Home = () => {
    const [news, setNews] = useState([]);
    console.log(typeof (news.articles), news);
    // const newsArray = news.articles;
    // console.log(typeof newsArray, newsArray);

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/everything?' +
    //         'q=Apple&' +
    //         // 'from=2023-04-25&' +
    //         'sortBy=popularity&' +
    //         'apiKey=8fd9027d736c4c5f9b7f5507c18514de')
    //         .then((res) => res.json())
    //         .then((data) => setNews(data))
    //         .catch((error) => console.log(error))
    // }, [])

    return (
        <div className='flex flex-col gap-3'>
            {
                news?.articles?.slice(0, 5).map((article, index) => <Article
                    key={index}
                    article={article}
                >{article.title}</Article>)
            }
        </div>
    );
};

export default Home;