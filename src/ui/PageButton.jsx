import React from 'react';

export default function PageButton({text,value,onClick}) {
    return (
        <button onClick={onClick} value={value} className='w-pg h-pg bg-bgcolor text-white mr-4 my-10px'>{text}</button>
    );
}

