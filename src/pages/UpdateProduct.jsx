import React, { useState } from 'react';
import Button from '../ui/Button';
import { upload } from '../api/upload';
import { updateProduct } from '../api/firebaseAPI';

export default function UpdateProduct() {
    const [product,setProduct] = useState({});
    const [file,setFile] = useState();
    const ids = ['file','name','color','size','price'];
    const handleChange = (e) => {
        if(e.target.name === "file"){
            e.target.files && setFile(e.target.files[0]);
            return;
        }
        setProduct({...product,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //cloudinary에 이미지 업로드
        upload(file).then((data)=>{
            //firebase데이터베이스에 새 제품 업로드
            updateProduct(product,data);         
        });
        ids.map((id)=>{
            document.getElementById(id).value = null;
        });
    }
    return (
        <section>
        {file && <img src={URL.createObjectURL(file)} alt="selectFile"/>}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div>
            <label>사진 선택하기 : </label>
            <input 
            id='file'
            type="file" 
            name='file' 
            required
            onChange={handleChange}
            
            />
            </div>
            <div className='flex'>
            <label>제품명</label>
            <input 
            id='name'
            type="text" 
            name='name' 
            required
            onChange={handleChange}
            
            />
            </div>
            <div>
            <label>색상</label>
            <input
            id='color' 
            type="text" 
            name="color" 
            onChange={handleChange}
        
            />
            </div>
            <div>
            <label>옷 사이즈</label>
            <input 
            id='size'
            type='text' 
            name='size' 
            required
            onChange={handleChange}
            
            />
            </div>
            <div>
            <label>가격</label>
            <input 
            id='price'
            type="text"
            name="price" 
            required 
            onChange={handleChange}
            
            />
            </div>
            <Button text="등록하기"/>
        </form>
        </section>
    );
}

