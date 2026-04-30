import { Link } from 'react-router-dom'
import styles from '../App.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/uploads/doomscrollerslogo.png" alt="Doomscrollers" />
      <p className={styles.tagline}>
        a privacy invading battle of<br />digital profiling
      </p>
      <nav className={styles.links}>
        <a href="#">download on iOS</a>
        <a href="#">download on Google Play</a>
        <Link to="/privacy">privacy policy &amp; terms</Link>
        <Link to="/faq">faq</Link>
      </nav>
    </div>
  )
}
