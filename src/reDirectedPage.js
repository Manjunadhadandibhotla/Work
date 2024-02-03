import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RedirectedPage.css";

const RedirectedPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      <ul className="product-list">
        {data.products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <p className="title">{product.title}</p>
              <p> ${product.amount}</p>
              <p className="rating">{product.rating}</p>
            </div>

            <div className="icon-container">
              <Link to={`/product/${product.id}`}>
                <div className="love-icon" href="/cart">
                  &#10084;
                </div>
              </Link>
              <div className="cart-icon" href="/cart">
                &#128722;
              </div>
            </div>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default RedirectedPage;
