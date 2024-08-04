import PortfolioGrid from '../PortfolioGrid';
import PortfolioImage from '../PortfolioImage';
import PortfolioPageLayout from '../PortfolioPageLayout';

export default function AdvertisingProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioImage
                    src="/images/coldplay.png"
                    alt="Coldplay x BTS: My Universe"
                    text="Coldplay x BTS"
                    externalUrl="https://www.rodeofx.com/news/rodeo-advertising-and-experiences-gets-mtv-vma-and-aeaf-nominations"
                />
                <PortfolioImage
                    src="/images/sunday-night-football.jpg"
                    alt="Sunday Night Football: Carrie Underwood"
                />
                <PortfolioImage
                    src="/images/slipknot.png"
                    alt="Nike: The Footballverse campaign"
                    text="Slipknot: Unsainted"
                    externalUrl="https://www.rodeofx.com/project/slipknot-unsainted"
                />
                <PortfolioImage
                    src="/images/2k24.webp"
                    alt="WWE 2K24 game cover features Cody Rhodes, Rhea Ripley and Bianca Belair"
                />
                <PortfolioImage
                    src="/images/footballverse.jpeg"
                    alt="Nike: The Footballverse campaign"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    );
}