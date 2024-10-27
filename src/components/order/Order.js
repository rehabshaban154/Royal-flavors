import React, { useState } from 'react';
import Data from '../menu/Data'; // assuming the data is imported from Data.js
import './order.css';

const Order = () => {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast');
    const [selectedItem, setSelectedItem] = useState(Data[0]);
    const [quantity, setQuantity] = useState(1);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        const firstItem = Data.find(item => item.category === category);
        setSelectedItem(firstItem);
    };

    const handleItemChange = (event) => {
        const itemId = parseInt(event.target.value, 10);
        const item = Data.find(item => item.id === itemId);
        setSelectedItem(item);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    // Filter items based on selected category
    const filteredItems = Data.filter(item => item.category === selectedCategory);

    return (
        <div className="order-container">
            <div className="order-image">
                <img src={selectedItem.img} alt={selectedItem.name} />
            </div>
            <div className="order-form">
                <h2>Place Your Order</h2>
                <form>
                    <label>
                        Select Category:
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Sandwiches">Sandwiches</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Coffee">Coffee</option>
                            <option value="Juice">Juice</option>
                        </select>
                    </label>
                    <label>
                        Select Item:
                        <select value={selectedItem.id} onChange={handleItemChange} style={{left:'66px'}}>
                            {filteredItems.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Quantity:
                        <input 
                            type="number" 
                            min="1" 
                            value={quantity} 
                            onChange={handleQuantityChange} 
                       style={{marginLeft:'77px'}} />
                    </label>
                    <div className="item-details">
                        <p><strong>Description:</strong> {selectedItem.disc}</p>
                        <p><strong>Price:</strong> ${selectedItem.price}</p>
                        <p><strong>Total:</strong> ${selectedItem.price * quantity}</p>
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Order;
