import { Link } from 'react-router-dom'
import styles from './page.module.css'

export default function FAQ() {
  return (
    <div className={styles.page}>
      <Link className={styles.back} to="/">← back</Link>
      <h1>faq</h1>

      <h2>1. What is Doomscrollers?</h2>
      <p>Doomscrollers is a social deduction game described as Werewolf, but with your social media feeds. It is a battle of digital profiling where players try to identify whose algorithm is being displayed.</p>

      <h2>2. How do I play?</h2>
      <ul>
        <li><strong>Join &amp; Host:</strong> Players enter a digital room via a host link.</li>
        <li><strong>Feed Dump:</strong> Everyone has 60 seconds to upload a selection of videos currently appearing on their social media FYP or Explore feeds (e.g., TikTok, Reels).</li>
        <li><strong>The Rounds:</strong> In each round, one video from the "Doomscroller" is revealed. Players have 60 seconds to interrogate each other before voting on whose feed they think it is.</li>
      </ul>

      <h2>3. What are the roles?</h2>
      <ul>
        <li><strong>The Doomscroller (1 Player):</strong> Their goal is to survive by convincing the group the feed belongs to someone else.</li>
        <li><strong>The Grass Touchers (Everyone Else):</strong> Their goal is to analyze the videos and identify the Doomscroller before the game ends.</li>
      </ul>

      <h2>4. Is my data safe?</h2>
      <p>Yes. We prioritize "Transient Processing".</p>
      <ul>
        <li><strong>No Persistent Storage:</strong> We do not save your uploaded videos to a permanent database.</li>
        <li><strong>Immediate Deletion:</strong> All session-specific data—including your "Feed Dump"—is erased immediately when the game ends or the connection is lost.</li>
      </ul>

      <h2>Support &amp; Troubleshooting</h2>

      <h2>The "Feed Dump" isn't working</h2>
      <ul>
        <li><strong>Timer:</strong> Ensure you complete your uploads within the 60-second window.</li>
        <li><strong>Connection:</strong> If your connection is lost, all session data is immediately erased for privacy reasons, and you will need to rejoin the room.</li>
      </ul>

      <h2>Technical Contact</h2>
      <p>For performance issues or data inquiries, you can reach the developers at Test Jar Labs, Inc. via email at <a href="mailto:hello@testjarlabs.com">hello@testjarlabs.com</a>.</p>
    </div>
  )
}
