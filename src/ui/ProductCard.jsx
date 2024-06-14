import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdRecommend } from "react-icons/md";
import RecommendBtttn from "./RecommendBttn";
import { getHeartProducts, getRecommend,setRecommend } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import { isUserContext } from '../Context/UserModeContext';

export default function ProductCard({product:{color,id,name,price,sales,size,url,recommend},isBasket}) {
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
    //찜하기 버튼 세팅(찜한 물품의 경우 찜버튼을 클릭된 상태)
    const {user} = useContext(isUserContext);
    const [heartBttn,setHeartBttn] = useState(false);
    const {isLoading,error,data: heartProducts} = useQuery({queryKey: ['MyHeartProducts'],queryFn: ()=>getHeartProducts(user.uid)});
    
    /////
    const [click,setClick] = useState(0);
    const [bttnOn,setBttnOn] = useState(false);
    const [numRec,setNumRec] = useState(product.recommend);
    useEffect(()=>{
        setNumRec(product.recommend);
        heartProducts&&heartProducts.map((heart)=>{
            if(product.name===heart.name) setHeartBttn(true);
        });
    },[])
    
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

    console.log(isBasket);
    
    return (
        <div>
            <Link to={`/products/${id}`} state={{color,name,price,sales,size,url,heartBttn}} >
            <img src={url} alt={name} className='w-imgW h-imgH'/>
            </Link>
            <div className='flex items-center'>
            <p className='text-productName'>{name}</p>
            {isBasket==null&&<RecommendBtttn click={click} handleClickBttn={handleClick} bttnOn={bttnOn} recommend={numRec}/>}
            </div>
            <p className='text-productName'>{price}</p>
        </div>
    );
}

