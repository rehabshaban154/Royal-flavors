import React, { useState } from 'react';
import Nav from '../nav/Nav';
import Data from './Data';
import Card from './Card';
import './menu.css'; // Assuming you're adding styles for the menu in a separate CSS file

export default function Menu() {
  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter items based on the selected category
  const filteredItems = Data.filter((item) => {
    if (selectedCategory === "All") {
      return true; // Show all items if "All" is selected
    }
    return item.category === selectedCategory; // Match items by category
  });

  // Function to handle category change
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Nav />
      <div style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <div className='container'>
          {/* Category filter labels */}
          <ul className='labels' style={{ left: '292px' }}>
            <li 
              onClick={() => handleCategoryClick('All')} 
              className={selectedCategory === 'All' ? 'active' : ''}
            >
              All
            </li>
            <li 
              onClick={() => handleCategoryClick('Breakfast')} 
              className={selectedCategory === 'Breakfast' ? 'active' : ''}
            >
              Breakfast
            </li>
            <li 
              onClick={() => handleCategoryClick('Pasta')} 
              className={selectedCategory === 'Pasta' ? 'active' : ''}
            >
              Pasta
            </li>
            <li 
              onClick={() => handleCategoryClick('Sandwiches')} 
              className={selectedCategory === 'Sandwiches' ? 'active' : ''}
            >
              Sandwiches
            </li>
            <li 
              onClick={() => handleCategoryClick('Coffee')} 
              className={selectedCategory === 'Coffee' ? 'active' : ''}
            >
              Coffee & Tea
            </li>
            <li 
              onClick={() => handleCategoryClick('Juice')} 
              className={selectedCategory === 'Juice' ? 'active' : ''}
            >
              Juice
            </li>
          </ul>
          
          {/* Menu items */}
          <div className='menu'>
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                name={item.name}
                disc={item.disc}
                price={item.price}
                sale={item.sale}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
