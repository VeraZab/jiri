import '/styles/main.modules.css';
import Section from './Section';
// import Image from 'next/image';

export default function HomePage() {
    return (
        <div id="content">
            <Section id="showreel" >
                <iframe
                    src="https://www.youtube.com/embed/O4fJxENtxxc?playlist=O4fJxENtxxc&rel=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                />
            </Section>
        </div>
    );
}