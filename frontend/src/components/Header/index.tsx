import React, { useState } from "react";
import VerticalLine from "ui/VerticalLine";
import styles from "./index.css";
import menuIcon from "assets/menuIcon.png";
import closeMenuIcon from "assets/closeMenuIcon.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [renderMenu, setRenderMenu] = useState(true);

  return (
    <header className={styles.header}>
      <img
        className={styles.menuIcon}
        onClick={() => {
          setRenderMenu(!renderMenu);
        }}
        src={renderMenu ? menuIcon : closeMenuIcon}
        alt="Abrir menu"
      />

      <div
        className={
          styles.headerPrincipalContainer +
          (renderMenu ? " " + styles.renderMenu : "")
        }
      >
        {/* nombre de la empresa */}
        <div>
          <h1 className={styles.headerLogoText}>Pufi</h1>
        </div>
        {/* navegacion.. se podría profundizar y conectar a los productos para que funcione pero me enfoque en el maquetado..*/}
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/richardiral/image/upload/v1665678100/it%20globers%20imagenes/bed_bedroom_furniture_home_icon_219420_b8iwyd.png"
                  alt=""
                  width={60}
                  height={60}
                />
                <span>CAMA</span>
              </a>
            </li>
            <VerticalLine />
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/richardiral/image/upload/v1665677369/it%20globers%20imagenes/sofa_furniture_couch_icon_209722_dfwsgp.png"
                  alt=""
                  width={60}
                  height={60}
                />
                <span>SOFÁ</span>
              </a>
            </li>
            <VerticalLine />
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/richardiral/image/upload/v1665677312/it%20globers%20imagenes/holiday_summer_beach_vacation_umbrella_icon_221887_ghy4tj.png"
                  alt=""
                  width={60}
                  height={60}
                />
                <span>PARAGUAS</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* sección de la cuenta */}
        <div className={styles.headerAcountSection}>
          <Link
            to="/my-account"
            className={styles.headerAcountSection__textContent}
          >
            Mi cuenta
          </Link>
          <VerticalLine />
          <Link to="" className={styles.headerAcountSection__textContent}>
            Carrito
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
