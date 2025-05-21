import React, { useState } from 'react'
import food from "./food.json"
import Product from './Product';

function Home() {
  const [Product1, setProduct1] = useState(food);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  
  // Filter and sort products
  const filteredProducts = Product1.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') {
      return parseInt(a.price) - parseInt(b.price);
    } else if (sortOption === 'price-high') {
      return parseInt(b.price) - parseInt(a.price);
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className='w-full mx-auto px-4 py-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Search and Filter Section */}
        <div className='mb-6 flex flex-col sm:flex-row gap-4 justify-between'>
          <div className='w-full sm:w-auto'>
            <input 
              type="text" 
              placeholder="Search products..." 
              className='px-3 py-2 border border-gray-300 rounded w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className='w-full sm:w-auto'>
            <select 
              className='px-3 py-2 border border-gray-300 rounded w-full bg-white'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item1, index) => (
              <Product key={index} data={item1} />
            ))
          ) : (
            <div className='col-span-full text-center py-10'>
              <p className='text-gray-500 text-lg'>No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
