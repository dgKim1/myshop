import React from 'react';
import { FaRegHeart } from "react-icons/fa";
export default function LoveBttn({text,handleLoveBttn,bttnOn}) {
    return (

        <FaRegHeart onClick={handleLoveBttn} className={`inline-block size-28 px-2 border-2 border-black hover:scale-105 hover:brightness-110  ${bttnOn ? "text-heart border-heart": ""}`} >
        </FaRegHeart>
        
    );
}

