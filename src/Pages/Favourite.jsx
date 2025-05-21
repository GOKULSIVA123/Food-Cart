import React, { useContext } from 'react'
import { cartContent } from '../App';

function Favourite() {
  const {Cart1, setCart1} = useContext(cartContent);
  
  const handleRemoveItem = (id) => {
    setCart1(Cart1.filter(item => item.id !== id));
  }
  
  const handleAddToCart = (item) => {
    // Assuming you have a function to add to main cart
    alert(`${item.name} added to main cart!`);
    // You would typically call another context function here
    // Example: addToMainCart(item);
  }
  
  const handleClearAll = () => {
    setCart1([]);
  }
  
  return (
    <>
    <div className='w-full mx-auto py-6'>
      <div className='w-[95%] max-w-6xl mx-auto'>
        <h1 className='font-[600] text-xl sm:text-2xl mt-3 mb-5'>Favorite Products</h1>
        
        {Cart1.length === 0 ? (
          <div className='text-center py-10'>
            <p className='text-gray-500 text-lg'>Your favorites list is empty</p>
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-4 mt-5'>
              {Cart1.map((item) => (
                <div key={item.id} className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] border-2 border-solid border-gray-300 rounded-lg p-4'>
                  <div className='flex justify-between items-start'>
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
                  
                  <div className='mt-3'>
                    <button 
                      onClick={() => handleAddToCart(item)} 
                      className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mt-6'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <button 
                  onClick={handleClearAll}
                  className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium transition-colors'
                >
                  Clear All Favorites
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default Favourite
