import React, { useContext, useState } from 'react'
import { cartContent } from '../App'

function Product({data}) {
    const {Cart, setCart, Cart1, setCart1} = useContext(cartContent)
    
    function addcart(){
        setCart([...Cart, data])
    }
    
    function removecart(){
        setCart(Cart.filter((c) => c.id !== data.id))
    }
    
    function addfav(){
        setCart1([...Cart1, data])
    }
    
    function removefav(){
        setCart1(Cart1.filter((c) => c.id !== data.id))
    }
    
    const isInCart = Cart.some(item => item.id === data.id);
    const isInFavorites = Cart1.some(item => item.id === data.id);
    
    return (
        <div className='w-full max-w-xs bg-white rounded-lg shadow-md p-4 flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 gap-3'>
            <div className='w-full flex flex-col items-center'>
                <img 
                    className='w-24 h-24 object-contain mb-2' 
                    src={data.image} 
                    alt={data.name}
                />
                <h1 className='font-semibold text-lg'>{data.name}</h1>
                <p className='text-gray-700 font-medium'>${data.price}</p>
            </div>
            
            <div className='w-full flex flex-col gap-2 mt-2'>
                <button 
                    onClick={isInCart ? removecart : addcart}
                    className={`w-full px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-colors ${
                        isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                
                <button 
                    onClick={isInFavorites ? removefav : addfav}
                    className={`w-full px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-colors ${
                        isInFavorites ? 'bg-gray-500 hover:bg-gray-600' : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                >
                    {isInFavorites ? 'Remove Favorite' : 'Add Favorite'}
                </button>
            </div>
        </div>
    )
}

export default Product
