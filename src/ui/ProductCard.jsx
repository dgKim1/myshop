import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdRecommend } from "react-icons/md";
import RecommendBtttn from "./RecommendBttn";
import { getRecommend,setRecommend } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';

export default function ProductCard({product:{color,id,name,price,sales,size,url,recommend}}) {
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
    const [click,setClick] = useState(0);
    const [bttnOn,setBttnOn] = useState(false);
    const [numRec,setNumRec] = useState(product.recommend);
    useEffect(()=>{
        setNumRec(product.recommend)
    })
    
    const handleClick = ()=>{
        setBttnOn(!bttnOn);
        setClick(1);
        if(!bttnOn) {//버튼 킬때(클릭전 버튼이 꺼져있는 상태)
            setRecommend(id,product,numRec+1);
        }
        else{
            if(click) {
                setRecommend(id,product,numRec);
            }
        }
    }
    
    return (
        <div>
            <Link to={`/products/${id}`} state={{color,name,price,sales,size,url}} >
            <img src={url} alt={name} className='w-imgW h-imgH'/>
            </Link>
            <div className='flex items-center'>
            <p className='text-productName'>{name}</p><RecommendBtttn click={click} handleClickBttn={handleClick} bttnOn={bttnOn} recommend={numRec}/>
            </div>
            <p className='text-productName'>{price}</p>
        </div>
    );
}

