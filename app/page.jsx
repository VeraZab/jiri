import Header from "./Header";
import Image from 'next/image';


export default function HomePage() {
    return (
        <div>
            <Header />
            <div id="content">
                <section id="showreel">
                    <iframe
                        src="https://www.youtube.com/embed/O4fJxENtxxc?playlist=O4fJxENtxxc&autoplay=1&rel=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    />
                </section>
                <section id="about">
                    <Image src="/images/throne.webp" layout="fill" />
                </section>
            </div>
        </div >
    );
}