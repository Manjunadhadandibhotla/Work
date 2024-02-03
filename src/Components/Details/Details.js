
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css"

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

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    
    fetch(`/db.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        const selectedProduct = jsonData.products.find(
          (p) => p.id === parseInt(productId)
        );
        setProduct(selectedProduct);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);
  const handleBuyNowClick = () => {
    // Handle any buy now logic
    // For example, update the state to show the popup
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="price">
          <b>$ {product.amount}</b>
        </div>
        <div className="buttons-container">
          <button className="buy-now-button" onClick={handleBuyNowClick}>
            <b>Buy Now</b>
          </button>
          <Link to={`/product/${productId}/info`}>
            <button className="add-to-cart-button">Add to basket</button>
          </Link>
        </div>
        {showPopup && <BuyNowPopup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
