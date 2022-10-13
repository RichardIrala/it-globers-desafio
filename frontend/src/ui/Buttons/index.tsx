import React from "react";
import styles from "./index.css";

export const ButtonTransparent = (props: {
  type?: "submit" | "button" | "reset";
  children: string;
}) => {
  return <button className={styles.buttonTransparent}>{props.children}</button>;
};

export const ButtonBlack = (props: {
  type?: "submit" | "button" | "reset";
  children: string;
}) => {
  return <button className={styles.buttonBlack}>{props.children}</button>;
};
