import author from "../assets/this-one (1).jpg";
import '../styles/Author.css';

function Author() {
    return (
    <section id="author-corner" className="content-block author-block">
        <div className="author-layout">
            {/* LEFT SIDE: VISUAL CONTAINER */}
            <div className="author-image-container">
                <img src={author} alt="Diana Borro - Author & Founder" className="author-profile-img" />
                <div className="author-image-frame-deco"></div>
            </div>

            {/* RIGHT SIDE: TEXT BIOGRAPHY */}
            <div className="author-bio">
                <span className="section-badge">The Creator</span>
                <h2>Meet the Author-Founder</h2>
                <div className="biography-text">
                    <p>
                        Hello! I am Diana Borro, the pen behind the press. I craft complex, psychological fantasy
                        universes where classic myths collide directly with the depths of human nature.
                    </p>
                    <p>
                        I founded Owl & Elk Press to not only host my own writing journeys, but to create an intentional,
                        author-first ecosystem where rich storytelling can flourish entirely without constraints. Whether following
                        a displaced wolf through Victorian alleys or exploring dark mythic dependencies, my goal is
                        to leave readers deeply immersed.
                    </p>
                </div>
                <div className="author-actions">
                    <a href="#contact" className="btn btn-author-contact">Request Speaking / Signings</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Author;