import PortfolioGrid from '../PortfolioGrid'
import PortfolioPageLayout from '../PortfolioPageLayout'

export default function Reels() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <iframe
                    src="https://player.vimeo.com/video/997542561?h=7341f5f46e"
                    width="640"
                    height="360"
                    allow="fullscreen; picture-in-picture"
                    frameBorder="0"
                />

                <iframe
                    src="https://player.vimeo.com/video/997542533?h=d304bceb70"
                    width="640"
                    height="360"
                    allow="fullscreen; picture-in-picture"
                    frameBorder="0"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}
