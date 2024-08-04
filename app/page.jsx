import styles from '/styles/home.module.css';
import ReelVideo from "./ReelVideo";


export default function HomePage() {
    return (
        <div className={styles.container}>
            <ReelVideo src="/videos/reel.mp4" />
        </div>
    );
}