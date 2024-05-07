import React,{useContext, useEffect, useState} from 'react';
import { getProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductPages from './ProductPages';
import {isUserContext} from '../Context/UserModeContext';

export default function AllProducts() {
    const {isLoading,error,data:products} = useQuery({queryKey: ['products'],queryFn: getProducts});
    const pageProduct = new Map();
    let pageNums = [];
    const [pagingProducts,setPagingProducts] = useState();
    //페이지별로 들어갈 상품들 세팅
    if(products){
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
        //페이지 번호 세팅
        setPageNums(parseInt(products.length/9)+1);  
    }
    //페이지 번호 세팅 함수
    function setPageNums(pages){
        for(let i=0;i<pages;i++){
            pageNums.push(i);
        }
    }
    return (
        <>
        {
            pageProduct[0]&&pageNums&&
        <ProductPages pageProduct={pageProduct} pageNums={pageNums}/>
}
        </>
    );
}

