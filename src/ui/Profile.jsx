import React from 'react';

export default function Profile({user:{photoURL,displayName,photoName}}) {
    return (
        <div className='flex items-center justify-center mr-4'>
            <img src={photoURL} className='rounded-full w-10 h-10' alt={photoName}/>
            <p>{displayName}</p>
        </div>
    );
}

