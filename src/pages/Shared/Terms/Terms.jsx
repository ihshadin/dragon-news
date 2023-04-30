import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3 className='text-center'>Terms & conditions</h3>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam eveniet, placeat eaque necessitatibus quas deleniti nam alias cumque sequi!</p>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam praesentium doloremque perferendis dolores quidem laboriosam optio amet nisi tenetur, quibusdam enim voluptas saepe obcaecati quaerat itaque recusandae? Cupiditate, nam.</p>
            <p className='fw-semibold fs-6'>Go back to <Link to='/register' className='text-danger'>Register</Link></p>
        </div>
    );
};

export default Terms;