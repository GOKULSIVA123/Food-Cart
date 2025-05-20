import React, { useContext, useEffect, useState } from 'react'
import { cartContent } from '../App';

function Cart0() {
  const {Cart,setCart}=useContext(cartContent)
  console.log("carts in",Cart);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(Cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[Cart])
  return (
    <>
    <div className='2xl:container mx-auto '>
      <div className='w-[95%] mx-auto grid grid-cols-1'>
        <h1 className='font-[600] mt-3'>Cart Products</h1>
        <div className='flex flex-col gap-4 mt-5'>
          {
            Cart.map((item)=>(
          <div key={item.id} className=' w-[50%] border-2 border-solid border-black'>
          <h1 className='font-[600]'>{item.name}</h1>
          <p>Price:{item.price}</p>
          </div>
        ))}

          <h1 className='font-[600]'>Total Amount:{total}</h1>
        </div>
      </div>
    </div>
   </>
  )
}

export default Cart0