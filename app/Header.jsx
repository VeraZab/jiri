import '/styles/header.modules.css';
import Link from 'next/link';

export default function Header() {
    return (
        <div id="header" >
            <div className='left desktop'>
                <Link href="#">AI Projects</Link> {"  "}
                <Link href="#">Advertising</Link> {"  "}
                <Link href="#">Episodic</Link> {"  "}
                <Link href="/about">About</Link>
            </div>
            <h1><Link href="/" >Jiri Kilevnik</Link></h1>
            <div className='right desktop'>
                <Link href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></Link>{""}
                <Link href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></Link>{""}
                <Link href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></Link>{""}
            </div>
            <div className="mobile">x</div>
        </div >
    );
}