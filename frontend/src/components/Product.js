import React from 'react';
import '../styles/product.css';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="product-button">Comprar</button>
        </div>
    );
};

export default Product;
