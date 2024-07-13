import styles from '/styles/portfolioimage.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function PortfolioImage({ src }) {
    return (
        <div className={styles.container}>
            <Image src={src} fill />
        </div>
    );
}

PortfolioImage.PropTypes = {
    src: PropTypes.string,
}

