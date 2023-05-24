import styles from "./sidebar.module.css"
import Image from "next/image";
const sidebaroption = ({text}) => {
  return (
    <div className={styles.option}>
      <Image width={30} height={30}/>
      <h1 className={styles.optiontext}>{text}</h1>
    </div>
  );
};

export default sidebaroption;

