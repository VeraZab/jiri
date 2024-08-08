import PortfolioGrid from '../PortfolioGrid'
import PortfolioImage from '../PortfolioImage'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function FilmProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioImage
                    src="/images/shangshi.webp"
                    alt="shang-chi: the legend of the ten rings - movie poster"
                />
                <PortfolioImage
                    src="/images/weeknd.jpg"
                    alt="spotify x the weeknd - alone with me interractive experience"
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
    )
}
