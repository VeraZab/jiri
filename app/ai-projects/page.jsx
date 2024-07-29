import PortfolioGrid from '../PortfolioGrid';
import PortfolioImage from '../PortfolioImage';
import PortfolioPageLayout from '../PortfolioPageLayout';

export default function AIProjects() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioImage
                    src="/images/shangshi.webp"
                    alt="shang-chi: the legend of the ten rings - movie poster"
                    url=""
                />
                <PortfolioImage
                    src="/images/weeknd.jpg"
                    alt="spotify x the weeknd - alone with me interractive experience"
                    url="https://www.oneclub.org/awards/younggunswork/-award/41434/the-weeknd-alone-with-me"
                />
                <PortfolioImage
                    src="/images/2k24.webp"
                    alt="WWE 2K24 game cover features Cody Rhodes, Rhea Ripley and Bianca Belair"
                    url="https://www.youtube.com/watch?v=t8961pFrH-I"
                />
                <PortfolioImage
                    src="/images/footballverse.jpeg"
                    alt="Nike: The Footballverse campaign"
                    url="https://www.framestore.com/work/footballverse"
                />
                <PortfolioImage
                    src="/images/young-again.jpg"
                    alt="Young Again"
                    text="Young Again / Never Again"
                    url="https://youngagainneveragain.org/the-making-of/"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    );
}

