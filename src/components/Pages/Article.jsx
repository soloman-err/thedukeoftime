import moment from 'moment';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    const { author, details, image_url, rating, thumbnail_url, title, total_view } = article;
    return (
        <>
            <div className='relative overflow-hidden border border-slate-200 px-5 pt-2 flex flex-col justify-between'>
                <img className='' src={image_url} alt="" />
                <div className='pb-20 py-5 text-start space-y-3'>
                    <h3 className='font-bold md:text-xl lg:text-2xl'>{title}</h3>
                    <p className='text-slate-700 lg:text-lg'>{details.slice(0, 200)}..
                        <Link className='text-sm'> Read more</Link>
                    </p>
                </div>
                <div className='flex justify-between px-5 items-center border-t bg-slate-50 absolute bottom-0 left-0 w-full py-2'>
                    <div>
                        <Rating
                            className='text-orange-600'
                            readonly
                            placeholderRating={4.5}
                            placeholderSymbol={
                                <FaStar />
                            }
                            emptySymbol={
                                <FaStarHalfAlt />
                            }
                        />
                    </div>
                    <div className='flex items-center gap-2 text-slate-500'>
                        <img className='w-8 h-8 rounded-full' src={author?.img} alt="" />
                        <div className='flex flex-col'>
                            <small> - {author?.name}</small>
                            <small className='text-slate-500'>{moment(author?.published_date).format('YYYY-MM-DD')}</small>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Article;