import twwbam_cover from "../assets/The Wolf Who Became a Man copy.jpg";
import tsaf_cover from "../assets/the street artist’s faun.png";
import {useState} from "react";

function BookCard() {
    const [loading, setLoading] = useState(false);
    const handleBuyEbook = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/payment/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('The backend is not giving a 200 :(');
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Error while trying to make the purchase:', error);
            alert('There was an issue while trying to purchase the eBook. Please try again later!');
        } finally {
            setLoading(false);
        }
    };

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
                        This is the story of a street artist and her prisoner, a faun. 
                        He ought to hate her, yet he knows nothing but love for her. 
                        Or, rather, obsession mistaken for love. 
                        As they travel from town to town, he gets the chance to escape. Will he take it?
                    </p>
                    <div className="book-actions">
                        <button
                            onClick={handleBuyEbook}
                            disabled={loading}
                            className="btn btn-ebook"
                            style={{
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? 'Caricamento...' : 'Buy E-book'}
                        </button>
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