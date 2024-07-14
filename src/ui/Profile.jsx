import React from 'react';

export default function Profile({user:{photoURL,displayName,photoName}}) {
    return (
        <div className='flex items-center justify-center mr-15'>
            <img src={photoURL} className='rounded-full w-40 h-40' alt={photoName}/>
        </div>
    );
}

