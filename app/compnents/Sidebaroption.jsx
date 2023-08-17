"use client";
import { useState } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
const Sidebaroption = ({ text, icon,linkid }) => {
  const [active, setActive] = useState(false);    

  const handleClick = () => {
    setActive(!active);
  };
  
  return (
    <Link className={styles.optionlinktext} href={`/${linkid}`}>
    <div className={styles.option} onClick={handleClick}>
      <p className={`${active ? styles.activeicon : ""}`}>{icon}</p>
      <p>{text}</p>
    </div>

    </Link>
  );
};

export default Sidebaroption;
