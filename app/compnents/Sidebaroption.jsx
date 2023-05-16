import styles from "./sidebar.module.css"

const sidebaroption = ({text}) => {
  return (
    <div className={styles.option}>
      <h1 className={styles.optiontext}>{text}</h1>
    </div>
  );
};

export default sidebaroption;

