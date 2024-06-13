import React from 'react';
import { getProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductPages from './ProductPages';


export default function BestProdcuts() {
    const {isLoading,error,data:products} = useQuery({queryKey: ['products'],queryFn: getProducts});
    let bestProducts = [];
    if(products){
    bestProducts = Object.assign([],products);//깊은 복사
    bestProducts.sort(function(a,b){
                return b.sales - a.sales;//내림차순
            });
    bestProducts = bestProducts.slice(0,10);

    }
    return (
        <>
        <ProductPages products={bestProducts}/>       
        </>
    );
}

