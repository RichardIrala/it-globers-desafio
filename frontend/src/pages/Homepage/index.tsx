import Header from "components/Header";
import Products from "components/Products";
import React from "react";
import styles from "./index.css";
import fondo from "/assets/main3.jpg";

/* Se utiliza background en style inline porque al utilizarlo en css se compila mal la imagen 
y esto conlleva a que el fondo no funcione, en cambio gracias a configuraciones de modulos de imagen
los puedo utilizar importandolos aqui */

const Homepage = () => {
  return (
    <div>
      <div
        style={{ background: `url(${fondo}) top center / cover` }}
        className={styles.principalContainer}
      >
        <Header />
        <div className={styles.homepageContentContainer}>
          <div className={styles.homepageContent}>
            <h3>{"Estar cómodo nunca fue tan fácil.".toUpperCase()}</h3>
            <button>SHOP</button>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Homepage;
