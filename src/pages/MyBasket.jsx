import React from 'react';
import { getFavoriteProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ui/ProductCard';


export default function MyBasket() {
    const {isLoading,error,data:products} = useQuery({queryKey: ['favorite'],queryFn: getFavoriteProducts()});
    return (
        
        <ul className='grid grid-cols-1 gap-25'>
            {
                products&&
            products.map((product) => (
                    <ProductCard product={product}/>
            ))
            }
            {
                !products&&(<div>
                    찜하신 상품 목록이 없습니다
                </div>)
            }
        </ul>

    );
}

