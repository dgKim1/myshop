import React, { useState } from 'react';
import Button from '../ui/Button';
import { upload } from '../api/upload';
import { updateProduct } from '../api/firebaseAPI';

export default function UpdateProduct() {
    const [product,setProduct] = useState({});
    const [file,setFile] = useState();
    const ids = ['file','name','color','size','price','productInfo'];
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
        <div className='flex justify-center w-full '>
        <section className='relative justify-center items-center w-full
         border-bgcolor border-2 rounded-md pb-4 px-2 top-3'>
            <h1 className='text-center text-2xl font-bold mt-10px'>신상품 업로드</h1>
        {file && <img src={URL.createObjectURL(file)} alt="selectFile" className='justify-center'/>}
        <form className='flex flex-col w-full p-20' onSubmit={handleSubmit}>
            <div className='flex items-center mb-upload-b'>
            <input 
            id='file'
            type="file" 
            name='file' 
            required
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            
            />
            </div>
            <div className='flex items-center mb-upload-b'>
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
            <div className='flex items-center mb-upload-b'>
            <input
            id='color' 
            type="text" 
            name="color" 
            onChange={handleChange}
            className='border-bgcolor border-2 p-1 size-full'
            placeholder='색상'
            />
            </div>
            <div className='flex items-center mb-upload-b'>
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
            <div className='flex items-center mb-upload-b'>
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
            <div className='flex items-center mb-upload-b'>
            <textarea id="productInfo" cols="50" rows="10" className='border-bgcolor border-2 p-1' placeholder='상세설명'></textarea>
            </div>
            
            <Button text="등록하기"/>
        </form>
        </section>
        </div>
    );
}

