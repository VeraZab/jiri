import styles from '/styles/about.module.css';
import Section from '../Section';
import PortfolioPageLayout from '../PortfolioPageLayout';

export default function HomePage() {
    return (
        <Section backgroundImage="/images/throne.webp">
            <div className={styles.container}>
                <div className={styles.caption}>
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
                    <p>
                        <b>
                            Professional experience:
                        </b>

                        {
                            " Flame, Nuke, After Effects, " +
                            "Unreal Engine, Maya, vfx and on-set supervision, compositing, " +
                            "motion desing, artificial inteligence."}
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
            </div>

        </Section>
    );
}

