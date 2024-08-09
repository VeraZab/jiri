import { ReactNode } from 'react'
import Image from 'next/image'

import styles from '/styles/portfolioitem.module.css'

const PortfolioLinkWrapper = ({
    externalUrl,
    children,
}: {
    externalUrl?: string
    children: ReactNode
}) => {
    if (externalUrl) {
        return (
            <a
                href={externalUrl ? externalUrl : ''}
                target="_blank"
                className={styles.link}
            >
                {children}
            </a>
        )
    }

    return <div className={styles.link}>{children}</div>
}

export default function PortfolioItem({
    src,
    alt,
    externalUrl,
    text,
    type,
    posterSrc,
}: {
    src: string
    alt: string
    externalUrl?: string
    text?: string
    type: 'video' | 'image'
    posterSrc?: string
}) {
    const content =
        type === 'image' ? (
            <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
        ) : (
            <video
                controls
                preload="auto"
                className={styles.video}
                poster={posterSrc}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )

    return (
        <div className={styles.container}>
            <PortfolioLinkWrapper externalUrl={externalUrl}>
                {content}
                {text ? (
                    <div className={styles.innerTextContainer}>
                        <div className={styles.text}>{text}</div>
                    </div>
                ) : null}
            </PortfolioLinkWrapper>
        </div>
    )
}
