'use client'
import ReelVideo from './ReelVideo'
import styles from '/styles/home.module.css'

export default function HomePage() {
    return (
        <div className={styles.container}>
            <ReelVideo src="/videos/reel.mp4" />
        </div>
    )
}
