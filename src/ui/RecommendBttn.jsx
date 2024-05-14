import React, { useState } from 'react';
import { MdRecommend } from "react-icons/md";
import { getRecommend, setRecommend } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
export default function RecommendBttn({click,handleLoveBttn,bttnOn,recommend,handleRcmm}) {
    if(bttnOn) {
        handleRcmm(recommend+1);
    }
    else{
        if(click) {
            handleRcmm(recommend);
        }
    }

    return (
        <>
        <MdRecommend onClick={handleLoveBttn} className={`size-20 ml-4 text-recommend hover:brightness-125 ${bttnOn ? "text-bttnOnRec":""}`} />
        <p>{bttnOn ? recommend+1 : recommend}</p>
        </>
        
    );
}

