import Product from "components/Product";
import React from "react";
import styles from "./index.css";

interface ProductProp {
  buttonContent: string;
  productTitle: string;
  productDescription: string;
  productContentButton: string;
  productIconURL: string;
  backgroundImageURL: string;
}

interface ProductsProps {
  products: ProductProp[];
}

// Podría hacer que reciba los productos por props así es más reutilizable, no lo hice porque el proyecto no lo requería
const Products = (props: ProductsProps) => {
  const productsData = props.products;
  return (
    <div className={styles.principalContainer}>
      {productsData?.map((product, index) => (
        <Product
          key={index}
          backgroundImage={product.backgroundImageURL}
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
