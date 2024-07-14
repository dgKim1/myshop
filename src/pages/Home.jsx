import React, { useContext } from 'react';
import background from "../images/background.jpg";
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebaseAPI';
import MySlider from '../ui/MySlider';



export default function Home() {

    const {isLoading,error,data:products} = useQuery({queryKey: ['products'],queryFn: getProducts});
    let bestProducts = null;
    if(products){
    bestProducts = Object.assign([],products);//깊은 복사
    bestProducts.sort(function(a,b){
                return b.sales - a.sales;//내림차순
            });
    bestProducts = bestProducts.slice(0,9);
    }
    
    return (
        <>
        <div className='flex flex-col justify-center '>
        <img src={background} alt='배경화면' className='h-imgH' />
        </div>
        <div className='flex flex-col items-center'>
            {bestProducts&&<h1 className='font-bold text-2xl my-10px'>베스트 상품</h1>}
            {bestProducts&&<MySlider bestProducts={bestProducts}/>}
        </div>
        </>
        
    );
}




