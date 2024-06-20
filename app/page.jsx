import Header from "./Header";
import Image from 'next/image';

export default function HomePage() {
    return (
        <div>
            <Header />
            <div id="content">
                <div className="section">
                    <iframe
                        id="showreel"
                        src="https://www.youtube.com/embed/O4fJxENtxxc?playlist=O4fJxENtxxc&autoplay=1&rel=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    />
                </div>
                <div className="about-section">
                    <Image src="/images/throne.webp" fill />
                </div>
            </div>
        </div>
    );
}