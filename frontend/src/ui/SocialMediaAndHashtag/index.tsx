import React from "react";
import styles from "./index.css";

interface SocialMediaAndHashtagProps {
  children: string;
  hashtag: string;
}

const SocialMediaAndHashtag = (props: SocialMediaAndHashtagProps) => {
  return (
    <div className={styles.principalContainer}>
      <h3>{props.children.toUpperCase()}</h3>
      <p>{"#" + props.hashtag.toUpperCase()}</p>
    </div>
  );
};

export default SocialMediaAndHashtag;
