import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({product:{color,id,name,price,sales,size,url}}) {
    return (
        <div>
            <Link to={`/products/${id}`} state={{color,name,price,sales,size,url}} >
            <img src={url} alt={name} className='w-imgW h-imgH'/>
            </Link>
            <p className='text-productName'>{name}</p>
            <p className='text-productName'>{price}</p>
        </div>
    );
}

