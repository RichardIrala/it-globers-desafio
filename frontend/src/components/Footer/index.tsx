import React from "react";
import VerticalLine from "ui/VerticalLine";
import styles from "./index.css";
import shieldIcon from "assets/shieldIcon.png";
import facebookIcon from "assets/facebookIcon.png";
import instagramIcon from "assets/instagramIcon.png";
import twitterIcon from "assets/twitterIcon.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogoTextMobileContainer}>
        <h1 className={styles.footerLogoTextMobile}>Pufi</h1>
      </div>

      <div className={styles.footerPrincipalContainer}>
        <div className={styles.footerLogoTextContainer}>
          <h1 className={styles.footerLogoText}>Pufi</h1>
        </div>

        <div>
          <nav className={styles.navigationCol}>
            <ul>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  PUFI RAIN
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  PUFI PUF
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  PUFI CART
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  PUFI NAP
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <VerticalLine className={styles.verticalDisplayNoneIn900} />

        <div>
          <nav className={styles.navigationCol}>
            <ul>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  CONTACTO
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  AYUDA
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  COMO COMPRAR
                </a>
              </li>
              <li>
                <a href="https://github.com/RichardIrala" target="__blank">
                  TERMINOS Y CONDICIONES
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <VerticalLine className={styles.verticalDisplayNoneIn900} />

        <div className={styles.securePurchaseContainer}>
          <p className={styles.securePurchaseText}>COMPRA 100% SEGURA</p>
          <div className={styles.footerIconsContainer}>
            <img src={shieldIcon} alt="Escudo" width={"auto"} height={60} />
            <p>COMPRA CON GARANTÍA DE PUFFI</p>
          </div>
        </div>

        <VerticalLine className={styles.verticalDisplayNoneIn900} />

        <div className={styles.socialMediasContainer}>
          <p>SEGUINOS EN</p>
          <div className={styles.socialMedias}>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={facebookIcon}
                alt="facebook logo"
                width={40}
                height={40}
              />
            </a>
            <a href="https://twitter.com/home" target="_blank">
              <img
                src={twitterIcon}
                alt="twitter logo"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                src={instagramIcon}
                alt="instagram icon"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
