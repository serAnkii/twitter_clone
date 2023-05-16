import styles from "../page.module.css"
import Image from "next/image";
const TweetBox = () => {
  return (
    <div className={styles.tweetbox}>
      <Image height={10} width={10}></Image>
      <form action="" method="post" className={styles.tweetboxform}>
        <input type="text" placeholder="What's happening?" className={styles.tweetboxforminput}/>
        <div className={styles.attachments}>
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <Image width={5} height={5} alt="icon" className={styles.input_icons} />
            <button>Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
