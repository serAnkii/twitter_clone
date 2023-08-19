import Sidebaroption from "./Sidebaroption";
import styles from "./sidebar.module.css"
import Link from "next/link";
import {BiBell, BiHomeCircle, BiMessage,BiHash,BiBookmarks,BiUser,BiDotsHorizontalRounded} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import Image from "next/image";
const Sidebar = () =>{
  return (
    <>
      <div className={styles.sidebar} >
        <div className={styles.logo}>
        <Link href={"/"} className={styles.linklogo}><BsTwitter/></Link>
        </div>
        <Sidebaroption className={styles.option} icon={<BiHomeCircle/>} text="home" linkid="/" active={true}/>
        <Sidebaroption className={styles.option} icon={<BiHash/>} text="explore" linkid="explore"/>
        <Sidebaroption className={styles.option} icon={<BiBell/>} text="notifications" linkid="notifications"/>
        <Sidebaroption className={styles.option} icon={<BiMessage/>} text="messages" linkid="messages"/>
        <Sidebaroption className={styles.option} icon={<BiBookmarks/>} text="bookmarks" linkid="bookmarks"/>
        <Sidebaroption className={styles.option} icon={<BiUser/>} text="profile" linkid="profile"/>

        <button variant="contained" className={styles.tweet_button} >
          Tweet
        </button>

        <div className={styles.user}>
          <Image src="/dummy-image.jpg" alt="img" width={50} height={50} style={{borderRadius:"50%"}}/>
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


