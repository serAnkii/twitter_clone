import Sidebaroption from "./Sidebaroption";
import styles from "./sidebar.module.css"
import Link from "next/link";
import {BiBell, BiHomeCircle, BiMessage} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"

const Sidebar = () =>{
  return (
    <>
      <div className={styles.sidebar} >
        <div className={styles.logo}>
        <Link href={"/"} className={styles.linklogo}><BsTwitter/></Link>
        
        </div>
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="Home" active={true}/>
        <Sidebaroption className={styles.option} icon={<i>#</i>} text="Explore" />
        <Sidebaroption className={styles.option} icon={<BiBell/>} text="Notifications" />
        <Sidebaroption className={styles.option} icon={<BiMessage/>} text="Messages" />
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="Bookmarks" />
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="Lists" />
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="Profile" />
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="More" />

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


