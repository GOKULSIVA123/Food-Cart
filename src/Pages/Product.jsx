import React, { useContext, useState } from 'react'
import { cartContent } from '../App'

function Product({data}) {
    const {Cart,setCart}=useContext(cartContent)
    const {Cart1,setCart1}=useContext(cartContent)
    function addcart(){
        setCart([...Cart,data])
    }
    function removecart(){
        setCart(Cart.filter((c)=>c.id!==data.id))
    }
    function addfav(){
        setCart1([...Cart,data])
    }
    function removefav(){
        setCart1(Cart.filter((c)=>c.id!==data.id))
    }
  return (
    <div key={data.id} className='max-w-64 min-h-52 mt-5 ml-5 bg-white rounded-lg flex flex-col justify-center text-center items-center transition-transform duration-300 hover:scale-110 gap-2'>
        <img width="100px" height="100px" src={data.image}></img>
        <h1>{data.name}</h1>
        <p>{data.price}</p>
        {
            Cart.includes(data)?(<button onClick={removecart}className='px-4 py-2 bg-black text-white rounded-lg'>Remove from Cart</button>):(<button onClick={addcart}className='px-4 py-2 bg-black text-white rounded-lg'>Add to Cart</button>)
        }
        {
            Cart1.includes(data)?(<button className="className='px-4 py-2 bg-black text-white rounded-lg" onClick={removefav}>Remove Favourite</button>):(<button onClick={addfav}className='px-4 py-2 bg-black text-white rounded-lg'>Add Favourite</button>)
        }
    </div>
  )
}

export default Product