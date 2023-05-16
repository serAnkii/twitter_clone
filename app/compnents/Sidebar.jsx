import Sidebaroption from "./Sidebaroption";
import styles from "./sidebar.module.css"
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar} >
        <div className={styles.logo}>
        <Image src="twitter.svg" alt="twitter logo" width={30} height={25} />
        </div>
        <Sidebaroption className={styles.option} text="Home" />
        <Sidebaroption className={styles.option} text="Explore" />
        <Sidebaroption className={styles.option} text="Notifications" />
        <Sidebaroption className={styles.option} text="Messages" />
        <Sidebaroption className={styles.option} text="Bookmarks" />
        <Sidebaroption className={styles.option} text="Lists" />
        <Sidebaroption className={styles.option} text="Profile" />
        <Sidebaroption className={styles.option} text="More" />

        <button variant="contained" className={styles.tweet_button} >
          Tweet
        </button>

        <div className={styles.user}>
          <img src="/" alt="user" />
          <div className={styles.names}>
            <h1>Name</h1>
            <h2>@Username</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


