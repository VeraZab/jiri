import Header from "./Header";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div id="content">
                <iframe
                    id="showreel"
                    src="https://www.youtube.com/embed/O4fJxENtxxc?playlist=O4fJxENtxxc&autoplay=1&rel=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                />
            </div>
        </div>
    );
}