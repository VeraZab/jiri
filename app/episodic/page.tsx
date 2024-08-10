import PortfolioGrid from '../PortfolioGrid'
import PortfolioItem from '../PortfolioItem'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function Episodic() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    type="image"
                    src="/images/invasion.webp"
                    alt="Apple TV: Invasion"
                    text="Apple TV: Invasion"
                    externalUrl="https://www.youtube.com/watch?v=DV-47DZvVZQ"
                />
                <PortfolioItem
                    type="image"
                    src="/images/lord.webp"
                    alt="Prime Video: Lord of The Rings"
                    text="Prime Video: Lord of The Rings"
                    externalUrl="https://www.youtube.com/watch?v=x8UAUAuKNcU"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
