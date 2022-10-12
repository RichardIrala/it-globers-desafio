import React from "react";

interface ProductProps {
  buttonContent;
  productTitle: string;
  productDescription: string;
  productContentButton: string;
  productIconURL: string;
  backgroundImage: string;
}

const Product = (props: ProductProps) => {
  const {
    buttonContent,
    productTitle,
    productDescription,
    productContentButton,
    productIconURL,
    backgroundImage,
  } = props;

  return (
    <div style={{ background: `url(${backgroundImage})` }}>
      <div>
        <button>{buttonContent}</button>
      </div>
      <div>
        <img src={productIconURL} alt="imagen de producto" />
        <h2>{productTitle}</h2>
        <p>{productDescription}</p>
        <a href="">{productContentButton}</a>
      </div>
    </div>
  );
};
