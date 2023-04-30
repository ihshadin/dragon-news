import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4 className='fw-bold mb-3'>All Categories</h4>
            {
                categories.map(category => <Link
                    key={category.id}
                    className='d-block text-decoration-none py-3 ps-4 bg-dark mt-2 text-light fw-semibold rounded-2 active'
                    to={`/category/${category.id}`}
                >
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftNav;