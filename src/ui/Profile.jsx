import React from 'react';

export default function Profile({user:{photoURL,displayName}}) {
    return (
        <div className="rounded">
            <img src={photoURL}/>
            <p>{displayName}</p>
        </div>
    );
}

