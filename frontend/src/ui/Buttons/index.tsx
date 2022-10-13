import React from "react";
import styles from "./index.css";

const ButtonTransparent = (props) => {
  return <button className={styles.buttonTransparent}>{props.children}</button>;
};

export default ButtonTransparent;
