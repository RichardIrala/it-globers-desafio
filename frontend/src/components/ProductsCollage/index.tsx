import React from "react";
import styles from "./index.css";
interface ProductsCollageProps {
  productsData: string[];
}
const ProductsCollage = (props: ProductsCollageProps) => {
  return (
    <div className={styles.principalContainer}>
      {props?.productsData?.map((productImageUrl, index) => (
        <img key={index} src={productImageUrl} alt="Imagen de producto" />
      ))}
    </div>
  );
};

export default ProductsCollage;
