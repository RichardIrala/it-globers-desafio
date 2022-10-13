import React from "react";
import VerticalLine from "ui/VerticalLine";
import styles from "./index.css";
import mockIcon from "assets/mockIcon.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerPrincipalContainer}>
        {/* nombre de la empresa */}
        <div>
          <h1 className={styles.headerLogoText}>Pufi</h1>
        </div>
        {/* navegacion */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="">
                <img src={mockIcon} alt="" width={60} height={60} />
                <span>PUFI ALGO</span>
              </a>
            </li>
            <VerticalLine />
            <li>
              <a href="">
                <img src={mockIcon} alt="" width={60} height={60} />
                <span>PUFI ALGO</span>
              </a>
            </li>
            <VerticalLine />
            <li>
              <a href="">
                <img src={mockIcon} alt="" width={60} height={60} />
                <span>PUFI ALGO</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* sección de la cuenta */}
        <div className={styles.headerAcountSection}>
          <a
            href="/my-account"
            className={styles.headerAcountSection__textContent}
          >
            Mi cuenta
          </a>
          <VerticalLine />
          <a href="" className={styles.headerAcountSection__textContent}>
            Mi Compra
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
