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
        //등록후 리셋
        ids.map((id)=>{
            document.getElementById(id).value = null;
        });
    }
    return (
        <div className='flex justify-center '>
        <section className='relative justify-center items-center w-4/5
         border-bgcolor border-2 rounded-md pb-4 px-2 top-3'>
            <h1 className='text-center text-2xl font-bold my-3'>신상품 업로드</h1>
        {file && <img src={URL.createObjectURL(file)} alt="selectFile" className='justify-center'/>}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex items-center mb-4'>
            <input 
            id='file'
            type="file" 
            name='file' 
            required
            onChange={handleChange}
            className='border-bgcolor border-2 p-1'
            
            />
            </div>
            <div className='flex items-center mb-4'>
            <input 
            id='name'
            type="text" 
            name='name' 
            required
            placeholder='제품명'
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            />
            </div>
            <div className='flex items-center mb-4'>
            <input
            id='color' 
            type="text" 
            name="color" 
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            placeholder='색상'
            />
            </div>
            <div className='flex items-center mb-4'>
            <input 
            id='size'
            type='text' 
            name='size' 
            required
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            placeholder='옷 사이즈'
            />
            </div>
            <div className='flex items-center mb-4'>
            <input 
            id='price'
            type="text"
            name="price" 
            required 
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            placeholder='가격'
            />
            </div>
            <Button text="등록하기"/>
        </form>
        </section>
        </div>
    );
}

