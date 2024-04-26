import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import PageButton from '../ui/PageButton';
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";
import { TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled } from "react-icons/tb";

export default function ProductPages({pageProduct,pageNums}) {
    const [presentPage,setPresentPage] = useState(0);
    const [pagingProducts,setPagingProducts] = useState(pageProduct[presentPage]);
    const handleClick = (e) => {
        console.log(e.target.value);
        setPresentPage(e.target.value);
        setPagingProducts(pageProduct[e.target.value]);
    } 
    const handleFirstPageClick = ()=>{
        //첫번째 페이지로 이동
        setPresentPage(0);
        setPagingProducts(pageProduct[0]);
    }
    const handleLastPageClick = ()=>{
        setPresentPage(pageNums.length-1);
        setPagingProducts(pageProduct[pageNums.length-1]);
    }
    const handleNextClick = ()=>{
        if(presentPage == pageNums-1) return;
        setPresentPage(presentPage+1);
        setPagingProducts(pageProduct[presentPage+1]);
    }
    const handlePrevClick = ()=>{
        if(presentPage==0) return;
        setPresentPage(presentPage-1);
        setPagingProducts(pageProduct[presentPage-1]);
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
        <footer className='flex justify-center'>
        <ul>
        <button className='mr-4' onClick={handleFirstPageClick}>
        <TbPlayerTrackPrevFilled  className='text-bgcolor'/>
        </button>
        <button className='mr-4' onClick={handlePrevClick}>
        <GrCaretPrevious className='text-bgcolor' />
        </button>
        {
            pageNums.map((pageNum)=>(
               <PageButton onClick={handleClick} text={pageNum+1} value={pageNum}/>
            ))
        }
        </ul>
        <button className='mr-4' onClick={handleNextClick}>
        <GrCaretNext className='text-bgcolor'/>
        </button>
        <button className='mr-4'>
        <TbPlayerTrackNextFilled onClick={handleLastPageClick} className='text-bgcolor'/>
        </button>
        </footer>
        </>
    );
}

