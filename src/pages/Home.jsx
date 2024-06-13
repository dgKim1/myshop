import React from 'react';
import background from "../images/background.jpg";


export default function Home() {
    return (
        <div className='flex justify-center'>
        <img src={background} alt='배경화면' />
        </div>
    );
}

