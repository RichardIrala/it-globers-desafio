import { Footer } from "components/Footer";
import Header from "components/Header";
import Products from "components/Products";
import ProductsCollage from "components/ProductsCollage";
import SubscribeForm from "components/SubscribeForm";
import React from "react";
import SocialMediaAndHashtag from "ui/SocialMediaAndHashtag";
import styles from "./index.css";
const fondoMain =
  "https://res.cloudinary.com/richardiral/image/upload/v1665676941/it%20globers%20imagenes/pexels-pixabay-237272_sskyl5.jpg";

const productsData = [
  {
    buttonContent: "Shop",
    productTitle: "Cama",
    productDescription: "Podría ser un producto real, lo soy?",
    productContentButton: "Ver más",
    productIconURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665678100/it%20globers%20imagenes/bed_bedroom_furniture_home_icon_219420_b8iwyd.png",
    backgroundImageURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665674348/it%20globers%20imagenes/3er_producto_quiza_cdyqxk.jpg",
  },
  {
    buttonContent: "Shop",
    productTitle: "Sofá",
    productDescription:
      "Descripción del producto, este es un producto simulado",
    productContentButton: "Ver más",
    productIconURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665677369/it%20globers%20imagenes/sofa_furniture_couch_icon_209722_dfwsgp.png",
    backgroundImageURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665674345/it%20globers%20imagenes/5to_producto_vagj2g.jpg",
  },
  {
    buttonContent: "Shop",
    productTitle: "Paraguas",
    productDescription: "Producto simulado",
    productContentButton: "Ver más",
    productIconURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665677312/it%20globers%20imagenes/holiday_summer_beach_vacation_umbrella_icon_221887_ghy4tj.png",
    backgroundImageURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665674336/it%20globers%20imagenes/1er_producto_fyaddb.jpg",
  },
  {
    buttonContent: "Shop",
    productTitle: "Sillas",
    productDescription:
      "Descripción del producto, este es un producto simulado",
    productContentButton: "Ver más",
    productIconURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665677973/it%20globers%20imagenes/chair_seat_furniture_icon_209747_q4ifft.png",
    backgroundImageURL:
      "https://res.cloudinary.com/richardiral/image/upload/v1665674330/it%20globers%20imagenes/4to_producto_kiiyb5.jpg",
  },
];

/* Se utiliza background en style inline porque al utilizarlo en css se compila mal la imagen 
y esto conlleva a que el fondo no funcione, en cambio gracias a configuraciones de modulos de imagen
los puedo utilizar importandolos aqui */
const collageImages = productsData.map((product) => product.backgroundImageURL);
const Homepage = () => {
  return (
    <div>
      <div
        style={{ background: `url(${fondoMain}) top center / cover` }}
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
      <Products products={productsData} />
      <SocialMediaAndHashtag hashtag="espufi">instagram</SocialMediaAndHashtag>
      <ProductsCollage productsData={collageImages} />
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Homepage;
