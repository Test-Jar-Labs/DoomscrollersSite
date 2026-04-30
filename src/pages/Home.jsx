import { useState, useRef } from 'react'
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
  const [muted, setMuted] = useState(false)
  const videoRef = useRef(null)

  function toggleMute() {
    const video = videoRef.current
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <>
      <video ref={videoRef} className={styles.bgVideo} src="/uploads/bgvid.webm" autoPlay loop playsInline />
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
      <button className={styles.muteBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </>
  )
}
