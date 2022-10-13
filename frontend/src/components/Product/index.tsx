import React from "react";
import { ButtonTransparent } from "ui/Buttons";
import HorizontalLine from "ui/HorizontalLine";
import styles from "./index.css";

interface ProductProps {
  buttonContent: string;
  productTitle: string;
  productDescription: string;
  productContentButton: string;
  productIconURL: string;
  backgroundImage: string;
  reverse?: Boolean;
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
    <div className={styles.principalContainer}>
      <div
        className={
          styles.buttonContainer +
          " " +
          (props.reverse && styles.buttonContainerReversePosition)
        }
        style={{ background: `url(${backgroundImage}) top center / cover` }}
      >
        <ButtonTransparent>{buttonContent}</ButtonTransparent>
      </div>
      <div className={styles.productInfoContainer}>
        <img
          src={productIconURL}
          alt="imagen de producto"
          width={100}
          height={100}
        />
        <div className={styles.titleContainer}>
          <h2 className={styles.titleContainer__title}>{productTitle}</h2>
          <HorizontalLine />
        </div>
        <p>{productDescription}</p>
        <a href="">{"> " + productContentButton}</a>
      </div>
    </div>
  );
};

export default Product;
