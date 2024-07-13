import styles from '/styles/aiprojects.module.css';
import PortfolioGrid from '../PortfolioGrid';
import PortfolioImage from '../PortfolioImage';
import Section from '../Section';

export default function AIProjects() {
    return (
        <div className={styles.container}>
            <PortfolioGrid>
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
                <PortfolioImage src="/images/throne.webp" alt="" />
            </PortfolioGrid>
        </div>
    );
}

