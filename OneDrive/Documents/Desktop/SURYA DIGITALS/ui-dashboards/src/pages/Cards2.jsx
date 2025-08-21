// src/pages/Cards2.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards1.css'; // Reusing styles from Cards1
import './Cards2.css'; // Specific styles for product cards

// In Step 6, change this to: 'http://localhost:3001/get-products'
const API_URL = 'http://interview.surya-digital.in/get-products';

const ProductCard = ({ product }) => {
  const isOutOfStock = product.stock === 0;
  return (
    <div className={`product-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      {product.isNew && <div className="badge new-badge">New</div>}
      {isOutOfStock && <div className="badge stock-badge">Out of Stock</div>}
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span>{product.inStock ? 'In Stock' : 'Unavailable'}</span>
          <span>•</span>
          <span>{product.soldCount.toLocaleString()} sold</span>
        </div>
        <p className="product-price">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

const Cards2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        // Assuming the structure is { products: [...] }
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="page-container"><p>Loading...</p></div>;
  if (error) return <div className="page-container"><p>{error}</p></div>;

  return (
    <div className="page-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cards2;