import '/styles/header.modules.css';

export default function Header() {
    return (
        <div id="header" >
            <div className='left desktop'>
                <a href="#">AI Projects</a> {"  "}
                <a href="#">Advertising</a> {"  "}
                <a href="#">Episodic</a> {"  "}
                <a href="/about">About</a>
            </div>
            <h1><a href="/" >Jiri Kilevnik</a ></h1>
            <div className='right desktop'>
                <a href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>{""}
                <a href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></a>{""}
                <a href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></a>{""}
            </div>
        </div >
    );
}