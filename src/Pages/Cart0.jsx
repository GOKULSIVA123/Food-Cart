import React, { useContext, useEffect, useState } from 'react'
import { cartContent } from '../App';

function Cart0() {
  const {Cart, setCart} = useContext(cartContent)
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(Cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
  }, [Cart])
  
  const handleRemoveItem = (id) => {
    setCart(Cart.filter(item => item.id !== id));
  }
  
  const handleCheckout = () => {
    alert(`Checkout completed! Total: $${total}`);
    setCart([]);
  }
  
  return (
    <>
    <div className='w-full mx-auto py-6'>
      <div className='w-[95%] max-w-6xl mx-auto'>
        <h1 className='font-[600] text-xl sm:text-2xl mt-3 mb-5'>Cart Products</h1>
        
        {Cart.length === 0 ? (
          <div className='text-center py-10'>
            <p className='text-gray-500 text-lg'>Your cart is empty</p>
          </div>
        ) : (
          <div className='flex flex-col gap-4 mt-5'>
            {Cart.map((item) => (
              <div key={item.id} className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] border-2 border-solid border-gray-300 rounded-lg p-4 flex justify-between items-center'>
                <div>
                  <h1 className='font-[600] text-lg'>{item.name}</h1>
                  <p className='text-gray-700'>Price: ${item.price}</p>
                </div>
                <button 
                  onClick={() => handleRemoveItem(item.id)} 
                  className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm transition-colors'
                >
                  Remove
                </button>
              </div>
            ))}

            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mt-6 border-t-2 border-gray-300 pt-4'>
              <h1 className='font-[600] text-lg sm:text-xl'>Total Amount: ${total}</h1>
              
              <div className='mt-6 flex flex-col sm:flex-row gap-3'>
                <button 
                  onClick={handleCheckout}
                  className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors'
                >
                  Checkout
                </button>
                
                <button 
                  onClick={() => setCart([])}
                  className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium transition-colors'
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
   </>
  )
}

export default Cart0
