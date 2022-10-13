import React from "react";
import styles from "./index.css";

const VerticalLine = (props: { className?: string }) => {
  return (
    <div
      className={
        styles.verticalLine + (props.className ? " " + props.className : "")
      }
    ></div>
  );
};

export default VerticalLine;
