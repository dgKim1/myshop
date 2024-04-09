import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';

export default function ProductPages({pageProduct,pageNums}) {
    const [pagingProducts,setPagingProducts] = useState(pageProduct[0]);
    const handleClick = (e) => {
        setPagingProducts(pageProduct[e.target.value]);
    }  
    return (
        <>
        <ul className='grid grid-cols-3 grid-row-3 gap-4'>
            {
                pagingProducts&&
            pagingProducts.map((product) => (
                    <ProductCard product={product}/>
            ))
            }
        </ul>
        <footer className='items-center'>
        <ul>
        {
            pageNums.map((pageNum)=>(
               <button value={pageNum} onClick={handleClick}>{pageNum+1}</button> 
            ))
        }
        </ul>
        </footer>
        </>
    );
}

