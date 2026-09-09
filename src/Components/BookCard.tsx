import {useState} from "react";
import "../styles/BookCard.css";

interface BookProps {
    title: string;
    stripePriceId?: string;
    genreTag?: string;
    synopsis: string;
    coverImg: string;
    amazonLink: string;
    goodreadsLink: string;
}

function BookCard({
                      title,
                      stripePriceId,
                      genreTag,
                      synopsis,
                      coverImg,
                      amazonLink,
                      goodreadsLink
                  }: BookProps) {
    const [loading, setLoading] = useState(false);
    const handleBuyEbook = async (e: React.MouseEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/payment/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    PriceId: stripePriceId
                })
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
        <div className="book-card">
                <div className="book-display">
                    <img src={coverImg} alt={title} className="book-cover-img"/>
                </div>
                <div className="book-details">
                    {genreTag && <span className="genre-tag">{genreTag}</span>}
                    <h3>{title}</h3>
                    {synopsis && <p className="book-synopsis">{synopsis}</p>}

                    {stripePriceId && (<button
                        onClick={handleBuyEbook}
                        disabled={loading}
                        className="btn btn-ebook"
                        style={{cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1}}
                    >
                        {loading ? 'Loading...' : 'Buy Now!'}
                    </button>)}
                    
                    <div className="book-actions">
                        {amazonLink && (
                            <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
                                Buy on Amazon
                            </a>
                        )}

                        {goodreadsLink && (
                            <a href={goodreadsLink} target="_blank" rel="noopener noreferrer"
                               className="btn btn-goodreads">
                                Give your review on Goodreads!
                            </a>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default BookCard;