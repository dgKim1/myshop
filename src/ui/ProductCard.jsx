import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdRecommend } from "react-icons/md";
import RecommendBtttn from "./RecommendBttn";
import { getRecommend,setRecommend } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';

export default function ProductCard({product:{color,id,name,price,sales,size,url,recommend}}) {
    const [click,setClick] = useState(0);
    const [bttnOn,setBttnOn] = useState(false);
    const [numRcmm,setNumRcmm] = useState(parseInt(recommend));
    const product ={
        id,
        name,
        price,
        url,
        color,
        size,
        sales,
        recommend
      }
    console.log(numRcmm);
    const handleClick = ()=>{
        setBttnOn(!bttnOn);
        setClick(1);
    }

    if(bttnOn) {
        setRecommend(id,product,recommend+1);
    }
    else{
        if(click) {
            setRecommend(id,product,recommend);
        }
    }
    return (
        <div>
            <Link to={`/products/${id}`} state={{color,name,price,sales,size,url}} >
            <img src={url} alt={name} className='w-imgW h-imgH'/>
            </Link>
            <div className='flex items-center'>
            <p className='text-productName'>{name}</p><RecommendBtttn click={click} handleLoveBttn={handleClick} bttnOn={bttnOn} recommend={numRcmm} handleRcmm={()=>setNumRcmm}/>
            </div>
            <p className='text-productName'>{price}</p>
        </div>
    );
}

