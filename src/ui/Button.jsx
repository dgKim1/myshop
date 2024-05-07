import React from 'react';

export default function Button({text,onClick}) {
    return (
        <button className='mr-4 text-xl bg-bgcolor text-white px-4 py-1 border-outline rounded hover:scale-105 hover:brightness-110' onClick={onClick}>{text}</button>
    );
}

