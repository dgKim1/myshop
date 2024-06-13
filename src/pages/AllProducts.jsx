import React,{useContext, useEffect, useState} from 'react';
import { getProducts, getRecommendProducts } from '../api/firebaseAPI';
import { useQuery } from '@tanstack/react-query';
import ProductPages from './ProductPages';
import {isUserContext} from '../Context/UserModeContext';
import { useOutlet, useOutletContext } from 'react-router-dom';

export default function AllProducts() {
    const {isLoading,error,data:products} = useQuery({queryKey: ['products'],queryFn: getProducts});
    useEffect(()=>{

    },[products]);
    let recommendProducts=[];//추천순 정렬 products
    let salesProducts=[];
    let allProducts = [];
    const {filter,filters,changeFilter} = useOutletContext();

    const selectEvent = ()=>{

    }


    if(products){
    allProducts = products;
    console.log(products);
    
    //추천순으로 정렬하여 products 필터링
    recommendProducts = Object.assign([],products);//깊은 복사
    recommendProducts.sort(function(a,b){
                return b.recommend - a.recommend;//내림차순
            });

    }

    //판매순으로 정렬하여 products 필터링
    salesProducts = Object.assign([],products);//깊은 복사
    salesProducts.sort(function(a,b){
                return b.sales - a.sales;//내림차순
            });


    function  changeSelect() {
        var selectFilter = document.getElementById('selectFilter');
        var selectValue = selectFilter.options[selectFilter.selectedIndex].value;
        changeFilter(selectValue);
        
    }


    
    return (
        <>
        <div className='flex'>
        <select className='flex' id='selectFilter' onChange={()=>changeSelect()}>
                {
                filters.map((value,index)=>(                    
                        <option value={value}>{value}</option>
                ))
                }
            </select>
            </div>
            {
                filter==="추천순"&&recommendProducts&& <ProductPages products={recommendProducts}/>
            }
            {
                filter==="All"&&allProducts&& <ProductPages products={allProducts}/>
            }
            {
                filter==="판매순"&&salesProducts&& <ProductPages products={salesProducts}/>
            }
        </>
    );
        }







