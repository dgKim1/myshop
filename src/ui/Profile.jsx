import React from 'react';

export default function Profile({user:{photoURL,displayName,photoName}}) {
    return (
        <div className='flex items-center justify-center mr-10px'>
            <img src={photoURL} className='rounded-full w-30 h-30' alt={photoName}/>
            <p>{displayName}</p>
        </div>
    );
}

