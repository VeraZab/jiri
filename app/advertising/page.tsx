import PortfolioGrid from '../PortfolioGrid'
import PortfolioItem from '../PortfolioItem'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function AdvertisingProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    type="image"
                    src="/images/greatest-show.jpeg"
                    alt="Sky Sports: Why so serious, Roy? | The Greatest Show On Earth"
                    text="Sky Sports: The Greatest Show on Earth"
                    externalUrl="https://www.framestore.com/work/greatest-show-earth"
                />
                <PortfolioItem
                    type="image"
                    src="/images/tag.png"
                    alt="TAG HEUER : Mysterious night at the Manufacture"
                    text="TAG HEUER x Monopoly"
                    externalUrl="https://www.youtube.com/watch?v=rAb5tOs-KlY"
                />
                <PortfolioItem
                    type="image"
                    src="/images/2k24.webp"
                    alt="WWE 2K24 game cover features Cody Rhodes, Rhea Ripley and Bianca Belair"
                />
                <PortfolioItem
                    type="image"
                    src="/images/footballverse.jpeg"
                    alt="Nike: The Footballverse campaign"
                />

                <PortfolioItem
                    type="image"
                    src="/images/coldplay.png"
                    alt="Coldplay x BTS: My Universe"
                    text="Coldplay x BTS"
                    externalUrl="https://www.rodeofx.com/news/rodeo-advertising-and-experiences-gets-mtv-vma-and-aeaf-nominations"
                />
                <PortfolioItem
                    type="image"
                    src="/images/sunday-night-football.jpg"
                    alt="Sunday Night Football: Carrie Underwood"
                    text="NBC: Sunday Night Football x Carrie Underwood"
                    externalUrl="https://www.rodeofx.com/project/sunday-night-football-2019"
                />
                <PortfolioItem
                    type="image"
                    src="/images/slipknot.png"
                    alt="Nike: The Footballverse campaign"
                    text="Slipknot: Unsainted"
                    externalUrl="https://www.rodeofx.com/project/slipknot-unsainted"
                />
                <PortfolioItem
                    type="image"
                    src="/images/flight-center2.webp"
                    alt="Flight Center: Be unbordered"
                    text="Flight Center: Be unbordered"
                    externalUrl="https://www.rodeofx.com/project/flight-centre-be-unborded"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
