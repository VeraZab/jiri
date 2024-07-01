import '/styles/main.modules.css';
import Carousel from "./Carousel";
import Header from "./Header";
// import Image from 'next/image';


export default function HomePage() {
    return (
        <div>
            <Header />
            <div id="content">
                <section id="showreel" >
                    <iframe
                        src="https://www.youtube.com/embed/O4fJxENtxxc?playlist=O4fJxENtxxc&rel=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                    />
                </section>
                <section id="about" className="bg-img" style={{ backgroundImage: "url('/images/throne.webp')" }}>
                    <div className="caption">
                        <p>
                            {"I'm an award-winning visual effects supervisor " +
                                "and compositing artist for over 16 years. "}
                        </p>
                        <p>
                            {
                                "I have worked on many projects including commercials, " +
                                "tv series, feature films, VR projects and artificial intelligence."
                            }
                        </p>
                        <p>
                            <b>
                                Professional experience:
                            </b>

                            {
                                " Flame, Nuke, After Effects, " +
                                "Unreal Engine, Maya, vfx and on-set supervision, compositing, " +
                                "motion desing, artificial inteligence."}
                        </p>
                    </div>
                </section>
                <section id="ai-projects">
                    <h1>AI Projects</h1>
                    <div className='carousel-wrapper'>
                        <Carousel />
                    </div>
                </section>
            </div>
        </div >
    );
}