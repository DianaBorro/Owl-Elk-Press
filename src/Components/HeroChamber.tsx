
function HeroChamber() {
    return (
    <section className="hero-chamber">
        <div className="hero-overlay"></div>
        <div className="hero-wrapper">
            <span className="hero-eyebrow">Now Available Worldwide</span>
            <h1 className="hero-title">
                Where Myth Collides <br />
                <span className="title-accent">With Human Nature.</span>
            </h1>
            <p className="hero-description">
                A warm welcome to Owl & Elk Press! Look around and read finished books, short stories, 
                and chapters of my next ongoing work!
            </p>
            <div className="hero-action-row">
                <a href="#bookshelf" className="hero-btn btn-solid">The Master Library</a>
                <a href="#about-press" className="hero-btn btn-outline">Tales from the Inkwell</a>
            </div>
        </div>
    </section>
    )
}

export default HeroChamber;