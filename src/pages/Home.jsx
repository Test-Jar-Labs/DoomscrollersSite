import { useState, useRef, useEffect } from 'react'
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
      onClick={(e) => {
        e.preventDefault()
        setClicked(c => !c)
        window.gtag?.('event', 'coming_soon_click', { label: children })
      }}
    >
      {hovered || clicked ? 'not available... yet' : children}
    </a>
  )
}

export default function Home() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    setMuted(true)
  }, [])

  function toggleMute() {
    const video = videoRef.current
    video.muted = !video.muted
    setMuted(video.muted)
    window.gtag?.('event', 'mute_toggle', { muted: video.muted })
  }

  return (
    <>
      <video ref={videoRef} className={styles.bgVideo} src="/uploads/bgvid.webm" autoPlay muted loop playsInline />
      <div className={styles.container}>
        <img className={styles.logo} src="/uploads/doomscrollerslogo.png" alt="Doomscrollers" />
        <p className={styles.tagline}>
          a privacy invading battle of<br />digital profiling
        </p>
        <nav className={styles.links}>
          <ComingSoonLink>download on iOS</ComingSoonLink>
          <ComingSoonLink>download on Google Play</ComingSoonLink>
          <Link to="/privacy" onClick={() => window.gtag?.('event', 'nav_click', { label: 'privacy_policy' })}>privacy policy &amp; terms</Link>
          <Link to="/faq" onClick={() => window.gtag?.('event', 'nav_click', { label: 'faq' })}>faq</Link>
        </nav>
      </div>
      <button className={styles.muteBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
        <img src={muted ? '/uploads/SoundOff.svg' : '/uploads/Sound.svg'} alt={muted ? 'Unmute' : 'Mute'} width="22" height="22" />
      </button>
    </>
  )
}
