'use client';
import { useState, useRef } from 'react';
import { SpeakerLoudIcon, SpeakerOffIcon } from '@radix-ui/react-icons';

import ReelVideo from "./ReelVideo";
import styles from '/styles/home.module.css';


export default function HomePage() {
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    const handleUnmuteClick = () => {
        setMuted((currentState) => !currentState);
        if (videoRef.current) {
            videoRef.current.muted = !muted;
        }
    };

    return (
        <div className={styles.container}>
            <ReelVideo src="/videos/reel.mp4" muted={muted} ref={videoRef} />
            <button
                onClick={handleUnmuteClick}
                className={styles.unmute}>
                {muted ? <SpeakerOffIcon /> : <SpeakerLoudIcon />}
            </button>
        </div>
    );
}