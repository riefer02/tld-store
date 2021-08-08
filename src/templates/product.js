import React from "react";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <div>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductTemplate;
