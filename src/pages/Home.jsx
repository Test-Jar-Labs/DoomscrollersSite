import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../App.module.css'

function ComingSoonLink({ children }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); setClicked(c => !c) }}
    >
      {hovered || clicked ? 'not available... yet' : children}
    </a>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/uploads/doomscrollerslogo.png" alt="Doomscrollers" />
      <p className={styles.tagline}>
        a privacy invading battle of<br />digital profiling
      </p>
      <nav className={styles.links}>
        <ComingSoonLink>download on iOS</ComingSoonLink>
        <ComingSoonLink>download on Google Play</ComingSoonLink>
        <Link to="/privacy">privacy policy &amp; terms</Link>
        <Link to="/faq">faq</Link>
      </nav>
    </div>
  )
}
