import PortfolioGrid from '../PortfolioGrid';
import PortfolioImage from '../PortfolioImage';
import PortfolioPageLayout from '../PortfolioPageLayout';

export default function AdvertisingProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioImage
                    src="/images/greatest-show.jpeg"
                    alt="Sky Sports: Why so serious, Roy? | The Greatest Show On Earth"
                    text="Sky Sports: The Greatest Show on Earth"
                    externalUrl="https://www.framestore.com/work/greatest-show-earth"
                />
                <PortfolioImage
                    src="/images/tag.png"
                    alt="TAG HEUER : Mysterious night at the Manufacture"
                    text="TAG HEUER x Monopoly"
                    externalUrl="https://www.youtube.com/watch?v=rAb5tOs-KlY"
                />
                <PortfolioImage
                    src="/images/2k24.webp"
                    alt="WWE 2K24 game cover features Cody Rhodes, Rhea Ripley and Bianca Belair"
                />
                <PortfolioImage
                    src="/images/footballverse.jpeg"
                    alt="Nike: The Footballverse campaign"
                />

                <PortfolioImage
                    src="/images/coldplay.png"
                    alt="Coldplay x BTS: My Universe"
                    text="Coldplay x BTS"
                    externalUrl="https://www.rodeofx.com/news/rodeo-advertising-and-experiences-gets-mtv-vma-and-aeaf-nominations"
                />
                <PortfolioImage
                    src="/images/sunday-night-football.jpg"
                    alt="Sunday Night Football: Carrie Underwood"
                    text="NBC: Sunday Night Football x Carrie Underwood"
                    externalUrl="https://www.rodeofx.com/project/sunday-night-football-2019"
                />
                <PortfolioImage
                    src="/images/slipknot.png"
                    alt="Nike: The Footballverse campaign"
                    text="Slipknot: Unsainted"
                    externalUrl="https://www.rodeofx.com/project/slipknot-unsainted"
                />


            </PortfolioGrid>
        </PortfolioPageLayout>
    );
}