import { forwardRef } from 'react'
import styles from '/styles/reelvideo.module.css'
import PropTypes from 'prop-types'

const ReelVideo = forwardRef(({ src, muted }, ref) => {
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
})

ReelVideo.propTypes = {
    src: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
}

export default ReelVideo
