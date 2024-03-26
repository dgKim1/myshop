import React,{useEffect, useState} from 'react';
import { getProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ui/ProductCard';

export default function AllProducts() {
    const {isLoading,error,data:products} = useQuery({queryKey: ['products'],queryFn: getProducts});
    return (
        <ul className='grid grid-cols-3 gap-4'>
            {products && products.map((product) => (
                    <ProductCard product={product}/>
            ))}
        </ul>
    );
}

