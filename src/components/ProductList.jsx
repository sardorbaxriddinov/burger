import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => setProducts(json))
  }, [])


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} image={product.image} title={product.title} price={`$${product.price}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
