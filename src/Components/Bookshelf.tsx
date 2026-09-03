import BookCard from "./BookCard.tsx";
import '../styles/BookShelf.css';

function Bookshelf() {
    return (
        <section id="bookshelf" className="content-block books-block">
            <h2>The Master Library</h2>
            <p className="section-intro">Discover the secrets of the completed works, 
                get immersed in their fantasy universes and fall in love with their characters!</p>
            <BookCard />
        </section>
    )
}

export default Bookshelf;