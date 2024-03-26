import React from 'react';

export default function ProductCard({product:{color,id,name,price,sales,size,url}}) {
    return (
        <div>
            <p>{name}</p>
            <img src={url} alt={name} className='w-imgW h-imgH'/>
        </div>
    );
}

