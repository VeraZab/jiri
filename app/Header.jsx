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
                <a href='#'><img src="/images/linkedin.svg" alt="LinkedIn" /></a>{""}
                <a href='#'><img src="/images/imdb.svg" alt="Imdb" /></a>{""}
                <a href='#'><img src="/images/envelope.svg" alt="Email" /></a>{""}
            </div>
        </div >
    );
}