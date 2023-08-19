import styles from "./widgets.module.css";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Message from "./Message";
const Widgets = () => {
  return (
    <div className={styles.widget}>
      <label className={styles.widgetlabel}>
        <BsSearch/>
        <input
          type="text"
          placeholder="Search Twitter"
          className={styles.widgetinput}
        />
      </label>
      <div className={styles.containerpeople}>
        <h2>Current Relevant People</h2>
        <div className={styles.person}>
          <img src="/dummy-image.jpg" alt="Profile 1" />
          <span>Person 1</span>
        </div>
        <div className={styles.person}>
          <img src="/dummy-image.jpg" alt="Profile 2" />
          <span>Person 2</span>
        </div>
        <div className={styles.person}>
          <img src="/dummy-image.jpg" alt="Profile 3" />
          <span>Person 3</span>
        </div>
      </div>
      <div className={styles.containerpeople}>
          <h2>Who to Follow</h2>
        </div>
      <Message/>
    </div>
    
  );
};

export default Widgets;
