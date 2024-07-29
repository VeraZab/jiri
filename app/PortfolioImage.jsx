import styles from '/styles/portfolioimage.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function PortfolioImage({ src, alt, url, text }) {
    return (
        <div className={styles.container}>


            <a href={url} target="_blank" className={styles.link}>
                <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
                {text ? (
                    <div className={styles.innerTextContainer}>
                        <div className={styles.text}>{text}</div>
                    </div>
                ) : null}
            </a>


        </div >
    );
}

PortfolioImage.PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string,
    text: PropTypes.string,
}

