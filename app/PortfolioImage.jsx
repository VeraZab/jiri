import styles from '/styles/portfolioimage.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function PortfolioImage({ src, alt }) {
    return (
        <div className={styles.container}>
            <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
        </div>
    );
}

PortfolioImage.PropTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

