import PortfolioGrid from '../PortfolioGrid'
import PortfolioItem from '../PortfolioItem'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function FilmProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    type="image"
                    src="/images/shangshi.webp"
                    alt="shang-chi: the legend of the ten rings - movie poster"
                />
                <PortfolioItem
                    type="image"
                    src="/images/weeknd.jpg"
                    alt="spotify x the weeknd - alone with me interractive experience"
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
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
