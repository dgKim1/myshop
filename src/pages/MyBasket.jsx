import React, { useContext } from 'react';
import { getFavoriteProducts, getHeartProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ui/ProductCard';
import { isUserContext } from '../Context/UserModeContext';
import { type } from '@testing-library/user-event/dist/type';


export default function MyBasket() {
    const {user} = useContext(isUserContext);
    const {isLoading,error,data: heartProducts} = useQuery({queryKey: ['MyHeartProducts'],queryFn: ()=>getHeartProducts(user.uid)});
    return (
        <>
        <ul className='grid grid-cols-1 gap-25'>
            {
                user&&heartProducts&&
            heartProducts.map((product) => (
                    <ProductCard product={product} isBasket={true}/>
            ))
            }
        </ul>
        <div className='flex justify-center'>
        {
            !user&&<h className="text-bgcolor">로그인을 하셔야 됩니다!!</h>
        }
        </div>
        </>

    );
}

