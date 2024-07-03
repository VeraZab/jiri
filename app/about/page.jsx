import '/styles/main.modules.css';
import Section from '../Section';
// import Image from 'next/image';

export default function HomePage() {
    return (
        <div id="content">
            <Section id="about" backgroundImage="/images/throne.webp">
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
            </Section>
        </div>
    );
}

