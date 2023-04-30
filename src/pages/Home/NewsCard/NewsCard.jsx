import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { HiEye, HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, author, image_url, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} alt="" roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <h2 className='fs-5 fw-bold m-0'>{author?.name}</h2>
                    <p className='m-0'><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
                </div>
                <div>
                    <HiOutlineBookmark style={{ fontSize: '20px', cursor: 'pointer', marginRight: '5px' }} />
                    <HiOutlineShare style={{ fontSize: '20px', cursor: 'pointer' }} />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fs-5'>{title}</Card.Title>
                <Card.Img variant='top' src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? details : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='fw-semibold text-warning'>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<ImStarEmpty className='text-light' />}
                        placeholderSymbol={<ImStarFull className='text-warning' />}
                        fullSymbol={<ImStarFull />}
                    /> <span>{rating.number}</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <HiEye /> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;