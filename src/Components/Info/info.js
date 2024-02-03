// ProductInfoPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./info.css";

const BuyNowPopup = ({ onClose }) => {
  return (
    <div className="buy-now-popup-overlay">
      <div className="buy-now-popup">
        <div className="success-icon">&#10004;</div>
        <p>Your order has been placed successfully!</p>
        <p>It will be delivered in 5 days.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ProductInfoPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [basePrice, setBasePrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fetch data for the specific product using productId
    fetch(`/db.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        const selectedProduct = jsonData.products.find(
          (p) => p.id === parseInt(productId)
        );
        setProduct(selectedProduct);
        setBasePrice(selectedProduct.amount);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);

  const handleBuyNowClick = () => {
    // Recalculate discount and total price based on the dynamic base price and quantity
    const discountPrice = basePrice * 0.1;
    const deliveryCharge = 5;
    const totalPrice = quantity * basePrice + deliveryCharge - discountPrice;

    // Handle any buy now logic
    // For example, update the state to show the popup
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="product-info-container">
      <div className="product-details">
        <img src={product?.image} alt={product?.title} />
        <div>
          <h2>{product?.title}</h2>
        </div>
      </div>
      <div className="quantity-management">
        <p>Quantity: {quantity}</p>
        <div className="quantity-buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Base Price: ${quantity * basePrice}</p>
        <p>Discount Price: ${quantity * basePrice * 0.1}</p>
        <p>Delivery Charge: $5</p>
        <p>Total Price: ${quantity * basePrice - quantity * basePrice * 0.1-5}</p>
        <button className="place-order-button" onClick={handleBuyNowClick}>
          Place Order
        </button>
      </div>
      {showPopup && <BuyNowPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default ProductInfoPage;
