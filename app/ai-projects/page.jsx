import styles from '/styles/aiprojects.module.css';
import PortfolioGrid from '../PortfolioGrid';
import PortfolioImage from '../PortfolioImage';
import Section from '../Section';

export default function AIProjects() {
    return (
        <div className={styles.container}>
            <PortfolioGrid>
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
                <PortfolioImage src="" />
            </PortfolioGrid>
        </div>
    );
}

