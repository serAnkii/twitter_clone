import styles from "./widgets.module.css"
import Link from "next/link"
const Widgets = () => {
  return (
    <div className={styles.widget}>
      <h1>Check this cool website from my Developer</h1>
      <a href="https://portfolio-website-xi-fawn.vercel.app/" target="_blank"> Click Here</a>
    </div>
  )
}

export default Widgets
