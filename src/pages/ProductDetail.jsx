import React, { useContext,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import LoveBttn from '../ui/LoveBttn';
import { removeFavoriteProduct, uploadFavoriteProducts } from '../api/firebaseAPI';
import { isUserContext } from '../Context/UserModeContext';

export default function ProductDetail() {
    const [bttnOn,setBttnOn] = useState(false);
    const {user} = useContext(isUserContext);
    //color,name,price,sales,size,url
    const location = useLocation().state;
    const product = {
        name: location.name,
        color: location.color,
        url: location.url,
        price: location.price,
        size: location.size,
    }

    const handleLoveBttn = ()=>{
        setBttnOn(!bttnOn);
    };

    //찜 버튼을 누를 경우 찜 목록에 제품추가
    if(bttnOn){
        uploadFavoriteProducts(product,user.uid);
    }
    else{
        removeFavoriteProduct(product.name,user.uid);
    }
return (
        <div >
            <h1>{location.name}</h1>
            <p>{location.color}</p>

            <img src={location.url} alt={location.name} className='w-imgW h-imgH'/>
            <p>{location.price}</p>
            <div>
            <label>옷 사이즈: </label>
            <select name='size' id='size'>
                {location.size.map((size)=>(
                    <option value={size}>{size}</option>
                ))}               
            </select>
            </div>
            <div>
            <label>색상 :</label>
            <select name='price' id='price'>
                {location.color.map((color)=>(
                    <option value={color}>{color}</option>
                ))}               
            </select>
            </div>
            <div className='flex items-center'>
            <Button text="구매하기"/>
            <Button text="장바구니"/>
            <LoveBttn id="loveBttn" text="찜" handleLoveBttn={handleLoveBttn} bttnOn={bttnOn}/>
            </div>
            
        </div>
    );

    
}

