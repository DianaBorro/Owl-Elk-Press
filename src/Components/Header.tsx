import owlAndElk from "../../public/OwlAndElk.png";
import {useState} from "react";
import '../styles/Header.css';

function Header()
{
    const [, setCurrentTab] = useState('home');
    return (
    <div className="site-container">
        {/* 1. ENHANCED ATMOSPHERIC NAVIGATION */}
        <header className="site-header">
            <div className="logo-area">
                <img src={owlAndElk} alt="Owl & Elk Press logo" className="nav-logo" />
                <div className="brand-text">
                    <span className="brand-name">Owl & Elk Press</span>
                    <span className="brand-tagline">Boutique Fantasy Publishing</span>
                </div>
            </div>
            <nav className="main-nav">
                <a href="#about-press" className="nav-link" onClick={() => setCurrentTab('press')}>The Press</a>
                <a href="#bookshelf" className="nav-link" onClick={() => setCurrentTab('books')}>Our Books</a>
                <a href="#author-corner" className="nav-link" onClick={() => setCurrentTab('author')}>The Author</a>
                <a href="#contact" className="nav-link nav-btn">Contact</a>
            </nav>
        </header>
    </div>
)
}
export default Header;