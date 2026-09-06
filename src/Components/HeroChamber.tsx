import '../styles/HeroChamber.css';

function HeroChamber() {
    return (
    <section className="hero-chamber">
        <div className="hero-overlay"></div>
        <div className="hero-wrapper">
            <span className="hero-eyebrow">Find fantasy-rich stories full of</span>
            <h1 className="hero-title">
                Action, Mystery, Romance, <br />
                <span className="title-accent">Lyrical Prose...</span>
            </h1>
            <p className="hero-description">
                And much more! A warm welcome to Owl & Elk Press! Look around and read finished books, short stories, 
                and chapters of my next ongoing work!
            </p>
            <div className="hero-action-row">
                <a href="#bookshelf" className="hero-btn btn-solid" data-tooltip="Click here to read my published works!">The Master Library</a>
                <a href="#about-press" className="hero-btn btn-outline" data-tooltip="Click here to read my work in progress!">Tales from the Inkwell</a>
            </div>
        </div>
    </section>
    )
}

export default HeroChamber;