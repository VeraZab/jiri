import PortfolioPageLayout from '../PortfolioPageLayout'
import styles from '../../styles/reels.module.css'

export default function Reels() {
    return (
        <PortfolioPageLayout>
            <div className={styles.container}>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://player.vimeo.com/video/997542561?h=7341f5f46e"
                        allow="fullscreen; picture-in-picture"
                        frameBorder="0"
                    />
                </div>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://player.vimeo.com/video/997542533?h=d304bceb70"
                        allow="fullscreen; picture-in-picture"
                        frameBorder="0"
                    />
                </div>
            </div>
        </PortfolioPageLayout>
    )
}
