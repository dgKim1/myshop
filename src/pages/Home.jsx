import React from 'react';
import background from "../images/background.jpg";
import BestProdcuts from "../pages/BestProdcuts";



export default function Home() {
    return (
        <div className='flex flex-col justify-center'>
        <img src={background} alt='배경화면' />
        <section id='BestProducts'>
            <BestProdcuts/>
        </section>
        </div>
    );
}

