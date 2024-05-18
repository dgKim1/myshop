import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getRecommendProducts } from '../api/firebaseAPI';

export default function Top() {
    const {data:recommendProducts} = useQuery({queryKey: ['r'],queryFn: getRecommendProducts});
    console.log(recommendProducts);
    return (
        <div>
            best30
        </div>
    );
}



