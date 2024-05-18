import React, { useState } from 'react';
import { MdRecommend } from "react-icons/md";
import { getRecommend, setRecommend } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
export default function RecommendBttn({bttnOn,recommend,handleClickBttn}) {
    return (
        <>
        <MdRecommend onClick={handleClickBttn} className={`size-20 ml-4  hover:brightness-125 ${bttnOn ? "text-bttnOnRec":"text-recommend"}`} />
        <p>{bttnOn? recommend+1:recommend}</p>
        </>
        
    );
}

