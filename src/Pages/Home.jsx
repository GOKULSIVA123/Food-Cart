import React from 'react'
import food from "./food.json"
import { useState } from 'react';
import Product from './Product';
function Home() {
  console.log(food);
  const [Product1,setProduct1]=useState(food);
  return (
    <div className='2xl:container mx-auto'>
    <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-violet-500 gap-5'>
      {
          Product1.map((item1,index)=>(
            <Product key={index} data={item1}></Product>
          ))

      }
    </div>
  </div>
  )
}

export default Home