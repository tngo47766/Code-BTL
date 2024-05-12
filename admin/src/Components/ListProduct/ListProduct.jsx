import React, { useState } from 'react'
import './ListProduct.css'
import { useEffect } from 'react';
import cross_icon from './cross_icon.png'
const ListProduct = () => {

  const [allproducts,setALLProduct] =useState([]);

  const fetchInfo =async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((resp)=>resp.json())
    .then((data)=>{setALLProduct(data)});
  }
  useEffect(()=>{
    fetchInfo();
  },[])
  const remove_product =async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id}),
    })
    await fetchInfo();
  }
  return (
    <div className='listproduct'>
        <h1>Toàn bộ quà đổi:</h1>
        <div className="listproduct-format-main">
          <p>Ảnh</p>
          <p>Tên</p>
          <p>Giá cũ</p>
          <p>Giá mới</p>
          <p>Danh mục</p>
          <p>Xóa</p>
        </div>
        <div className="listproduct-allproduct">
          <hr />
          {allproducts.map((product,index)=>{
            return <> <div className='listproduct-format-main listproduct-format' key={index}>
                <img src={product.image} alt="" className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
            </div>
            <hr />
            </>
          })}
        </div>
    </div>
  )
}

export default ListProduct