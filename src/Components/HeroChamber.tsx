
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
                Welcome to Owl & Elk Press. We craft meticulous, dark indie fantasy landscapes
                and house the official catalog and creative worlds of author Diana Borro.
            </p>
            <div className="hero-action-row">
                <a href="#bookshelf" className="hero-btn btn-solid">Explore the Catalogue</a>
                <a href="#about-press" className="hero-btn btn-outline">Publishing Services</a>
            </div>
        </div>
    </section>
    )
}

export default HeroChamber;