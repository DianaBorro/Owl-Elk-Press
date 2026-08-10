import BookCard from "./BookCard.tsx";
import '../styles/BookShelf.css';

function Bookshelf() {
    return (
        <section id="bookshelf" className="content-block books-block">
            <h2>Featured Publications</h2>
            <p className="section-intro">Explore the foundational fantasy universes crafted by Owl & Elk Press.</p>
            <BookCard />
        </section>
    )
}

export default Bookshelf;