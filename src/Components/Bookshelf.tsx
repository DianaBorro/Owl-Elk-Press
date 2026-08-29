import BookCard from "./BookCard.tsx";
import '../styles/BookShelf.css';
import twwbam_cover from  '../assets/The Wolf Who Became a Man copy.jpg';
import tsaf_cover from '../assets/the street artist’s faun.png';

function Bookshelf() {
    return (
        <section id="bookshelf" className="content-block books-block">
            <h2>Featured Publications</h2>
            <p className="section-intro">Explore the foundational fantasy universes crafted by Owl & Elk Press.</p>
            <div className="bookshelf-horizontal-scroll">
                <BookCard
                    title="The Street Artist's Faun"
                    stripePriceId="price_1U9Y1lFeEIEfaRhKOFXHKZeqd"
                    genreTag="Romantasy"
                    synopsis="Can a wolf learn how to love? When turned into a human due to a bet between the Moonlady, 
                    a powerful celestial being, and Lord Zessesis, a vampire king, all Damocles can focus on is how to go back. 
                    He's taken in by a wealthy Victorian family, where he meets Clarisse, 
                    a servant with a deep secret from another world. She helps him for the first part of his journey, 
                    not knowing what consequences that would lead to."
                    coverImg={twwbam_cover}
                    amazonLink="https://amzn.eu/d/07RoMrcr"
                    goodreadsLink="https://www.goodreads.com/book/show/254665175-the-wolf-who-became-a-man"
                />

                <BookCard
                    title="The Wolf Who Became a Man"
                    stripePriceId="price_UN_ALTRO_PRICE_ID_DI_STRIPE"
                    genreTag="Romantasy"
                    synopsis=" This is the story of a street artist and her prisoner, a faun.
                     He ought to hate her, yet he knows nothing but love for her.
                     Or, rather, obsession mistaken for love.
                     As they travel from town to town, he gets the chance to escape. Will he take it?"
                    coverImg={tsaf_cover}
                    amazonLink="https://amzn.eu/d/0f8hs1Kh"
                    goodreadsLink="https://www.goodreads.com/book/show/255832602-the-street-artist-s-faun"
                />
            </div>       
        </section>
    )
}

export default Bookshelf;