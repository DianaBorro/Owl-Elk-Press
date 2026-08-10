import twwbam_cover from "../assets/The Wolf Who Became a Man copy.jpg";
import tsaf_cover from "../assets/the street artist’s faun.png";

function BookCard() {
    return (
        <div className="book-grid">

            <div className="book-card">
                <div className="book-display">
                    <img src={twwbam_cover} alt="The Wolf Who Became a Man Book Cover" className="book-cover-img"/>
                </div>
                <div className="book-details">
                    <span className="genre-tag">Victorian Fantasy / Romantasy</span>
                    <h3>The Wolf Who Became a Man: Book I</h3>
                    <p className="book-author">By Diana Borro</p>
                    <p className="book-synopsis">
                        Can a wolf learn how to love? When turned into a human due to a cosmic bet between the Moonlady
                        and a vampire king, Damocles struggles to adapt to a Victorian world while protecting secrets.
                    </p>
                    <div className="book-actions">
                        <a
                            href="https://amzn.eu/d/07RoMrcr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-amazon"
                        >
                            Buy on Amazon
                        </a>
                        <a
                            href="https://www.goodreads.com/book/show/254665175-the-wolf-who-became-a-man"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-goodreads"
                        >
                            Give your review on Goodreads!
                        </a>
                    </div>
                </div>
            </div>

            <div className="book-card">
                <div className="book-display">
                    {/* A different gradient style to represent modern street art colliding with myth */}
                    <img src={tsaf_cover} alt="The Street Artist's Faun Book Cover" className="book-cover-img"/>
                </div>
                <div className="book-details">
                    <span className="genre-tag">Urban Fantasy / Mythic Fiction</span>
                    <h3>The Street Artist's Faun</h3>
                    <p className="book-author">By Diana Borro</p>
                    <p className="book-synopsis">
                        A captivating short story that bridges modern urban environments with classic mythological
                        wonder.
                        Perfect for readers looking for a quick, enchanting escape into a hidden world.
                    </p>
                    <div className="book-actions">
                        <a
                            href="https://amzn.eu/d/0f8hs1Kh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-amazon"
                        >
                            Read on Kindle
                        </a>
                        <a
                            href="https://www.goodreads.com/book/show/255832602-the-street-artist-s-faun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-goodreads"
                        >
                            Give your review on Goodreads!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;