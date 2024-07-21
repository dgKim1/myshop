import React, { useEffect, useState } from 'react';
import ProductCard from '../ui/ProductCard';
import PageButton from '../ui/PageButton';
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";
import { TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled } from "react-icons/tb";
import Pagination from 'react-bootstrap/Pagination'

export default function ProductPages({products}) {
    let pageProduct = new Map();
    let [presentPage,setPresentPage] = useState(0);
        //페이저 번호 세팅
    let pageNums = [];
    const pages = parseInt(products.length/9)+1;
    for(let i=0;i<pages;i++){
        pageNums.push(i);
    }

    let temp = [];
    let start = 0;
    products.map((product,index)=>{
        if(start === parseInt(index/9)) {temp.push(product)}
        else{
            pageProduct[start] = temp;
            temp = [];
            start++;
            temp.push(product);
        }
    });
    //마지막 페이지에 들어갈 제품들 담고 초기화
    pageProduct[start]=temp;
    start =0;
    temp = [];   
    const [pagingProducts,setPagingProducts] = useState(pageProduct[0]);

    ///클릭 이벤트(페이지 이동)//
    const handleClick = async (e) => {
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
        if(presentPage >= pageNums.length-1) {
            console.log(presentPage);
            setPresentPage(pageNums.length-1);
            setPagingProducts(pageProduct[presentPage]);
            return;
        }

        setPresentPage(presentPage+1);
        setPagingProducts(pageProduct[presentPage+1]);
    }
    const handlePrevClick = ()=>{
        if(presentPage<=0) return;
        setPresentPage(presentPage-1);
        setPagingProducts(pageProduct[presentPage-1]);
    }

    useEffect(()=>{

    },[presentPage]);
    return (
        <>
        <div className='flex justify-center mt-10px'>
        <ul className='grid grid-cols-3 grid-row-3 gap-25'>
            {
                pageProduct[presentPage]&&
            pageProduct[presentPage].map((product) => (
                    <ProductCard product={product}/>
            ))
            }
        </ul>
        </div>
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

