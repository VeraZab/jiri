import PortfolioGrid from '../PortfolioGrid'
import PortfolioItem from '../PortfolioItem'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function AIProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    src="/images/2k24.webp"
                    alt="WWE 2K24 game cover features Cody Rhodes, Rhea Ripley and Bianca Belair"
                    externalUrl="https://www.youtube.com/watch?v=t8961pFrH-I"
                    text="WWE x 2K24"
                />
                <PortfolioItem
                    src="/images/footballverse.jpeg"
                    alt="Nike: The Footballverse campaign"
                    externalUrl="https://www.framestore.com/work/footballverse"
                    text="Nike: The Footballverse"
                />
                <PortfolioItem
                    src="/images/shangshi.webp"
                    alt="shang-chi: the legend of the ten rings - movie poster"
                    externalUrl="https://www.youtube.com/watch?v=Oa1SpVpgW_c"
                    text="Shang-Chi: The Legend of the Ten Rings"
                />
                <PortfolioItem
                    src="/images/weeknd.png"
                    alt="spotify x the weeknd - alone with me interractive experience"
                    externalUrl="https://www.oneclub.org/awards/younggunswork/-award/41434/the-weeknd-alone-with-me"
                    text="Spotify x The Weeknd"
                />

                <PortfolioItem
                    src="/images/young-again.jpg"
                    alt="Young Again"
                    text="Young Again / Never Again"
                    externalUrl="https://youngagainneveragain.org/the-making-of/"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
