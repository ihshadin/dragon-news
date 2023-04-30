import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, category_id, image_url, } = news;

    return (
        <Card className="mb-4 border-light position-relative">
            <Card.Body>
                <Card.Img variant='top' src={image_url} />
                <Card.Title className='fs-4 fw-bold mt-4'>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant='danger'><HiArrowLeft /> All News in this category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;