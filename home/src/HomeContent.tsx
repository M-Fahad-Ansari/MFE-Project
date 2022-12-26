import React, { useState, useEffect, useCallback } from "react";

import { getProducts, currency, Product } from "shell/products";

import { Link } from "react-router-dom";

export default function HomeContent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className='flex'>
            <div className='flex-grow font-bold'>
              <Link to={`product/${product.id}`}>{product.name}</Link>
            </div>
            <div className='flex-end'>{currency.format(product.price)}</div>
          </div>
          <div className='text-sm mt-4'>{product.description}</div>
        </div>
      ))}
    </div>
  );
}
