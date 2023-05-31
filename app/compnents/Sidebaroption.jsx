"use client"
import { useState } from "react";
import styles from "./sidebar.module.css"
import Image from "next/image";
const sidebaroption = ({text,icon}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.option} onClick={handleClick}>
      <p className={`${active ? styles.activeicon : ''}`}>{icon}</p>
      <h1 className={`${styles.optiontext} ${active ? styles.active : ''}`}>{text}</h1>
    </div>
  );
};

export default sidebaroption;

