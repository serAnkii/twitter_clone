"use client"
import { useEffect } from 'react';
import dbConnect from "../utils/db.js";
import styles from "../page.module.css"
import Image from "next/image";
const TweetBox = () => {
  
  useEffect(() => {
    dbConnect();
  }, []);
  
  
  async function handleSubmit(){
       
  }


  return (
    <div className={styles.tweetbox}>
      
      <Image height={50} width={50} style={{border:"1px solid white",borderRadius:"50%"}} src="/dummy-image.jpg"></Image>
      <form className={styles.tweetboxform} >
        <input  type="text" placeholder="What's happening?!" className={styles.tweetboxforminput}/>
        <input type='button' />
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
