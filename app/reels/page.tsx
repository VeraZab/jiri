import PortfolioGrid from '../PortfolioGrid'
import PortfolioItem from '../PortfolioItem'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function Reels() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    type="video"
                    src="/videos/reel-ads.mp4"
                    alt="reel of ai and ad projects"
                    text="Advertising & AI Reel"
                    posterSrc="/images/advertising&ai.png"
                />
                <PortfolioItem
                    type="video"
                    src="/videos/reel-film.mp4"
                    alt="reel of film and episodic projects"
                    text="Film & TV Reel"
                    posterSrc="/images/film&tv.png"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
