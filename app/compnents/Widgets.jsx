import styles from "./widgets.module.css";

import Link from "next/link";
const Widgets = () => {
  return (
    <div className={styles.widget}>
      <label className={styles.widgetlabel}>
        Search
        <input
          type="text"
          placeholder="Search Twitter"
          className={styles.widgetinput}
        />
      </label>
      <div className={styles.containerpeople}>
        <h2>Current Relevant People</h2>
        <div className={styles.person}>
          <img src="profile1.png" alt="Profile 1" />
          <span>Person 1</span>
        </div>
        <div className={styles.person}>
          <img src="profile2.png" alt="Profile 2" />
          <span>Person 2</span>
        </div>
        <div className={styles.person}>
          <img src="profile3.png" alt="Profile 3" />
          <span>Person 3</span>
        </div>
      </div>
      <div className={styles.containerpeople}>
          <h2>Who to Follow</h2>
        </div>
    </div>
    
  );
};

export default Widgets;
