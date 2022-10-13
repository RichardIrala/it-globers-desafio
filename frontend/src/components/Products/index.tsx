import Product from "components/Product";
import React from "react";
import styles from "./index.css";
import fondo from "/assets/main3.jpg";
const productsData = [
  {
    buttonContent: "Shop",
    productTitle: "Paraguas",
    productDescription: "Podría ser un producto real, lo soy?",
    productContentButton: "Ver más",
    productIconURL: fondo,
    backgroundImage: fondo,
  },
  {
    buttonContent: "Shop",
    productTitle: "Paraguas2",
    productDescription:
      "Descripción del producto, este es un producto simulado",
    productContentButton: "Ver más",
    productIconURL: fondo,
    backgroundImage: fondo,
  },
  {
    buttonContent: "Shop",
    productTitle: "Paraguas3",
    productDescription: "Producto simulado",
    productContentButton: "Ver más",
    productIconURL: fondo,
    backgroundImage: fondo,
  },
  {
    buttonContent: "Shop",
    productTitle: "Paraguas4",
    productDescription:
      "Descripción del producto, este es un producto simulado",
    productContentButton: "Ver más",
    productIconURL: fondo,
    backgroundImage: fondo,
  },
];

// Podría hacer que reciba los productos por props así es más reutilizable, no lo hice porque el proyecto no lo requería
const Products = () => {
  return (
    <div className={styles.principalContainer}>
      {productsData?.map((product, index) => (
        <Product
          key={index}
          backgroundImage={product.backgroundImage}
          buttonContent={product.buttonContent}
          productContentButton={product.productContentButton}
          productDescription={product.productDescription}
          productIconURL={product.productIconURL}
          productTitle={product.productTitle}
          reverse={index % 2 == 0 ? false : true}
        />
      ))}
    </div>
  );
};

export default Products;
