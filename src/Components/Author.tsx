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
                        Hello! I am Diana Borro, the pen behind the press. 
                        Writing is my passion and I hope you'll love the worlds and characters I create just as I do!
                    </p>
                    <p>
                        I founded Owl & Elk Press as I published my debut novel, "The Wolf Who Became a Man", 
                        the first book in a trilogy. I plan to fill it with wonderful worlds where readers
                        can feel at home. I think of myself as an optimist, 
                        and although there are dark moments in my stories, they're there as a staircase
                        to learn and grow. I truly believe that inner peace and serenity can be created and found
                        in any circumstance, and that's one of the messages I try to promote with my stories.
                    </p>
                    <p>
                        With this I give you a warm welcome to the nest! Whether you'll visit every once in a while
                        or every day, you're always welcome, make this your home!
                    </p>
                    <p>
                        With love, Diana
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Author;