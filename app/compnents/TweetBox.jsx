import styles from "../page.module.css"
import Image from "next/image";
const TweetBox = () => {
  return (
    <div className={styles.tweetbox}>
      <Image height={50} width={50} style={{border:"1px solid white",borderRadius:"50%"}}></Image>
      <form action="" method="post" className={styles.tweetboxform}>
        <input type="text" placeholder="What's happening?!" className={styles.tweetboxforminput}/>
        <div className={styles.attachments}>
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <Image width={5} height={5} alt="icon" className={`${styles.input_icons} ${styles.input_items}`}  />
            <button className={`${styles.input_items} ${styles.tweet_button}`}>Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
