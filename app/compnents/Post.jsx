import styles from "./post.module.css";
import Image from "next/image";

const Post = () => {
  return (
    <div className={styles.post}>
      <Image height={50} width={50} className={styles.reactions} />
      <div className={styles.post__body}>
        <div className={styles.post_header}>
          <h1 className={styles.header_items}>Twitter</h1>
          <svg
            fill="var(--twitter-color)"
            height={"2rem"}
            width="2rem"
            viewBox="0 0 24 24"
            aria-label="Verified account"
            role="img"
            className="header_items"
            data-testid="icon-verified"
          > 
            <g>
              <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
            </g>
          </svg>
          {/* yahan par dim class bhi use hue hai 2 h3 mai */}
          <h3 className={styles.header_items}>@twitter_official</h3>
          <h3 className={styles.header_items}>. 20h</h3>
          <h3 className={styles.header_items}>...</h3>
        </div>
        <div className={styles.post__text}>
          <p>@Elon Musk just bought me</p>
        </div>
        <div className={styles.post_image}>
          <Image src={"./twitter.svg"} height={337} width={504} />
        </div>
        <div className={styles.post__stats}>
          <div className={styles.post_statdiv}>
            <Image height={10} width={10} className={styles.reactions} />
            <p>1549</p>
          </div>
          <div className={styles.post_statdiv}>
            <Image height={10} width={10} className={styles.reactions} />
            <p>1549</p>
          </div>
          <div className={styles.post_statdiv}>
            <Image height={10} width={10} className={styles.reactions} />
            <p>1549</p>
          </div>
          <div className={styles.post_statdiv}>
            <Image height={10} width={10} className={styles.reactions} />
            <p>1549</p>
          </div>
          <div className={styles.post_statdiv}>
            <Image height={10} width={10} className={styles.reactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
