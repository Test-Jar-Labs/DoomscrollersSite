import { Link } from 'react-router-dom'
import styles from './page.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <Link className={styles.back} to="/">← back</Link>

      <h1>privacy policy</h1>
      <p className={styles.meta}>Last Updated: April 29, 2026</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Doomscrollers (the "App"). We are committed to protecting your privacy while facilitating our social deduction gameplay. This Privacy Policy explains how we handle your information during the "digital profiling" process. If you do not agree with these terms, please do not access the App.</p>

      <h2>2. Information We Collect</h2>
      <p><strong>2.1. Volatile Gameplay Data</strong><br />When you join or host a game, we collect:</p>
      <ul>
        <li><strong>User ID:</strong> A unique identifier generated for your specific game session.</li>
        <li><strong>Feed Dump:</strong> Videos or posts you choose to upload from your social media FYP or Explore feeds for use during the game.</li>
      </ul>
      <p><strong>2.2. Non-Personal and Analytics Data</strong><br />We collect information that does not directly identify you to improve performance:</p>
      <ul>
        <li><strong>Device Information:</strong> Including IP address, device type, and operating system.</li>
        <li><strong>Usage Data:</strong> Session length, features accessed, and interactions within the App.</li>
        <li><strong>Analytics:</strong> Aggregated data collected via Google Analytics to understand app behavior.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p><strong>3.1. Transient Processing</strong><br />All "Feed Dump" content is stored temporarily in the server's volatile memory (RAM) solely to facilitate the "Reveal" and "Interrogation" rounds.</p>
      <p><strong>3.2. To Improve and Secure Services</strong></p>
      <ul>
        <li>Analyze usage data to enhance game features.</li>
        <li>Protect against unauthorized access and monitor for fraudulent activities.</li>
      </ul>

      <h2>4. Data Retention and Erasure</h2>
      <p><strong>4.1. Immediate Deletion</strong><br />All session-specific data—including videos, game states, and roles—is erased immediately when the game ends, the server stops, or the connection is lost.</p>
      <p><strong>4.3. No Persistent Storage</strong><br />We do not save your uploaded videos or game-specific data to a permanent database.</p>

      <h2>5. Security of Your Information</h2>
      <p>We implement security measures such as encryption for data in transit and access controls. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

      <hr className={styles.divider} />

      <h1>terms of service</h1>

      <h2>1. Acceptance of Risk</h2>
      <p>Doomscrollers is a social deduction game centered on "digital profiling". By playing, you acknowledge that you are voluntarily sharing a selection of your social media feed with other players in a private room.</p>

      <h2>2. User-Generated Content (UGC) License</h2>
      <ul>
        <li><strong>The Doomscroll Grant:</strong> By uploading content to the "Feed Dump," you grant the App a temporary, non-persistent license to stream and display that content to other participants in your current session.</li>
        <li><strong>Ownership:</strong> You retain all ownership rights to your content. We do not store, sell, or use your uploads for any purpose outside the active game session.</li>
      </ul>

      <h2>3. Prohibited Content</h2>
      <p>You are strictly prohibited from uploading:</p>
      <ul>
        <li>Illegal, sexually explicit, or highly offensive material.</li>
        <li>Content that violates the privacy or intellectual property of third parties.</li>
      </ul>

      <h2>4. Disclaimer of Liability</h2>
      <p>The game is designed to test how well you know your friends. We are not responsible for personal disputes, "social media reveals," or damages arising from the content shared by players during the "Interrogation" or "Vote" phases.</p>

      <h2>5. Game Rules and Conduct</h2>
      <ul>
        <li><strong>The Doomscroller:</strong> Must attempt to deflect suspicion and survive.</li>
        <li><strong>The Grass Touchers:</strong> Must investigate and identify the Doomscroller.</li>
        <li><strong>Abuse:</strong> We reserve the right to terminate session IDs for players who use the game to harass others.</li>
      </ul>

      <h2>6. Contact Us</h2>
      <p>If you have questions regarding these terms, please contact us at <a href="mailto:hello@testjarlabs.com">hello@testjarlabs.com</a>.</p>
    </div>
  )
}
