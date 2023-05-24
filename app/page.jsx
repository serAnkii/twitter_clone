import Image from "next/image";
import styles from "./page.module.css";
import TweetBox  from "./compnents/TweetBox";
import Post from "./compnents/Post";
export default function Home() {
  return (
    <>
      <div className={styles.feed}>
        <div className={styles.feed_header}>
          <h1>Home</h1>
        </div>
        <TweetBox />
      </div>
    </>
  );
}
