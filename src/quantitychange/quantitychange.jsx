import React, { useState } from "react";
import "./quantitychange.css";

const Quantitychange = () => {
  const [totalQuantity] = useState(7); // Total quantity (fixed)
  const [cartQuantity, setCartQuantity] = useState(9); // Pre-selected cart quantity
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state

  const handleQuantityChange = (quantity) => {
    setCartQuantity(quantity); // Update cart quantity when a button is clicked
  };

  const handleSubmit = () => {
    console.log(`You have selected: ${cartQuantity}`);
    setIsPopupOpen(false); // Close the popup after submission
  };

  return (
    <div className="quantity-change-container">
      <button onClick={() => setIsPopupOpen(true)}>Change Quantity</button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Select Quantity</h3>
            
           { totalQuantity<10 && 
            
            <p className="error-message"> Only {totalQuantity} Left </p>}
            <div className="quantity-buttons">
              {Array.from({ length: Math.min(totalQuantity, 10) }, (_, index) => {
                const quantity = index + 1;
                return (
                  <button
                    key={quantity}
                    className={`quantity-button ${
                      quantity === cartQuantity ? "selected" : ""
                    }`}
                    onClick={() => handleQuantityChange(quantity)}
                  >
                    {quantity}
                  </button>
                );
              })}
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      
      <p>Total Quantity : {totalQuantity}</p>
      <p>Cart Quantity  : {cartQuantity}</p>
    </div>
  );
};

export default Quantitychange;





// import React,{useState} from 'react'

// const Quantitychange = () => {

//     const [totalquantity, settotalquantity] = useState(15);
//     const [cartquantity, setcartquantity] = useState(5);

//   return (
//     <div>



//         <button>change quantity</button>
//     </div>
//   )
// }

// export default Quantitychange