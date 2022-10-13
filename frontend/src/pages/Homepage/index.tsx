import { Footer } from "components/Footer";
import Header from "components/Header";
import Products from "components/Products";
import ProductsCollage from "components/ProductsCollage";
import SubscribeForm from "components/SubscribeForm";
import React from "react";
import SocialMediaAndHashtag from "ui/SocialMediaAndHashtag";
import styles from "./index.css";
const fondo =
  "https://res.cloudinary.com/richardiral/image/upload/v1665629030/it%20globers%20imagenes/main3_mzurfu.jpg";

/* Se utiliza background en style inline porque al utilizarlo en css se compila mal la imagen 
y esto conlleva a que el fondo no funcione, en cambio gracias a configuraciones de modulos de imagen
los puedo utilizar importandolos aqui */
const collageImages = [fondo, fondo, fondo, fondo, fondo, fondo];
const Homepage = () => {
  return (
    <div className={styles.paddingBottom}>
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
      <SocialMediaAndHashtag hashtag="espufi">instagram</SocialMediaAndHashtag>
      <ProductsCollage productsData={collageImages} />
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Homepage;
