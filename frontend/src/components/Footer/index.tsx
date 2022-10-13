import React from "react";
import VerticalLine from "ui/VerticalLine";
import styles from "./index.css";
import shieldIcon from "assets/shieldIcon.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrincipalContainer}>
        <div className={styles.footerLogoTextContainer}>
          <h1 className={styles.footerLogoText}>Pufi</h1>
        </div>

        <div>
          <nav className={styles.navigationCol}>
            <ul>
              <li>PuffiRain</li>
              <li>PuffiRain</li>
              <li>PuffiRain</li>
              <li>PuffiRain</li>
            </ul>
          </nav>
        </div>

        <VerticalLine />

        <div>
          <nav className={styles.navigationCol}>
            <ul>
              <li>CONTACTO</li>
              <li>AYUDA</li>
              <li>COMO COMPRAR</li>
              <li>TERMINOS Y CONDICIONES</li>
            </ul>
          </nav>
        </div>

        <VerticalLine />

        <div>
          <p className={styles.securePurchaseText}>COMPRA 100% SEGURA</p>
          <div className={styles.footerIconsContainer}>
            <img src={shieldIcon} alt="Escudo" width={60} height={60} />
            <p>COMPRA CON GARANTÍA DE PUFFI</p>
          </div>
        </div>

        <VerticalLine />

        <div>
          <p>SEGUINOS EN</p>
          <a href="">icono fb</a>
          <a href="">icono instagram</a>
          <a href="">icono twitter</a>
        </div>
      </div>
    </footer>
  );
};
