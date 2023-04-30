import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();


    return (
        <>
            {id && <h5 className='fw-bold'>This Category News: {categoryNews.length}</h5>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news} />)
            }
        </>
    );
};

export default Category;