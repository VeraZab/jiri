import { forwardRef, ForwardedRef } from 'react'

import styles from '/styles/reelvideo.module.css'

const ReelVideo = forwardRef(
    (
        { src, muted }: { src: string; muted: boolean },
        ref: ForwardedRef<HTMLVideoElement>
    ) => {
        return (
            <video
                className={styles.video}
                autoPlay
                loop
                playsInline
                preload="auto"
                tabIndex={-1}
                muted={muted}
                ref={ref}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
)

export default ReelVideo
