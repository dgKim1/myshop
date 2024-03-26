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
        <section className='relative justify-center items-center w-4/5 translate-x-1/10
         border-bgcolor border-2 rounded-md pb-4 px-2 top-3'>
            <h1 className='text-center text-2xl font-bold my-3'>신상품 업로드</h1>
        {file && <img src={URL.createObjectURL(file)} alt="selectFile" className='justify-center'/>}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex items-center mb-4'>
            <label className='bg-bgcolor text-xl text-white rounded-md p-1'> 사진 선택하기 </label>&nbsp;
            <input 
            id='file'
            type="file" 
            name='file' 
            required
            onChange={handleChange}
            className='border-bgcolor border-4 p-1'
            
            />
            </div>
            <div className='flex items-center mb-4'>
            <label className='bg-bgcolor text-xl text-white rounded-md p-1'>제품명</label>&nbsp;
            <input 
            id='name'
            type="text" 
            name='name' 
            required
            onChange={handleChange}
            className='border-bgcolor border-4 p-1'
            />
            </div>
            <div className='flex items-center mb-4'>
            <label className='bg-bgcolor text-xl text-white rounded-md p-1'>색상</label>&nbsp;
            <input
            id='color' 
            type="text" 
            name="color" 
            onChange={handleChange}
            className='border-bgcolor border-4 p-1'
            />
            </div>
            <div className='flex items-center mb-4'>
            <label className='bg-bgcolor text-xl text-white rounded-md p-1'>옷 사이즈</label>&nbsp;
            <input 
            id='size'
            type='text' 
            name='size' 
            required
            onChange={handleChange}
            className='border-bgcolor border-4 p-1'
            />
            </div>
            <div className='flex items-center mb-4'>
            <label className='bg-bgcolor text-xl text-white rounded-md p-1'>가격</label>&nbsp;
            <input 
            id='price'
            type="text"
            name="price" 
            required 
            onChange={handleChange}
            className='border-bgcolor border-4 p-1'
            />
            </div>
            <Button text="등록하기"/>
        </form>
        </section>
    );
}

