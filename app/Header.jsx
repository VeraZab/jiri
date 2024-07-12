import styles from '/styles/header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.header} >
            <div className={`${styles.left} ${styles.desktop}`}>
                <Link href="#">AI Projects</Link> {"  "}
                <Link href="#">Advertising</Link> {"  "}
                <Link href="#">Episodic</Link> {"  "}
                <Link href="/about">About</Link>
            </div>
            <h1 className={styles.title}><Link href="/" >Jiri Kilevnik</Link></h1>
            <div className={`${styles.right} ${styles.desktop}`}>
                <Link href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></Link>{""}
                <Link href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></Link>{""}
                <Link href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></Link>{""}
            </div>
            <div className={styles.mobile}>x</div>
        </div >
    );
}