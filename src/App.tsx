import './App.css';
import Header from './Components/Header';
import HeroChamber from "./Components/HeroChamber.tsx";
import PublishingHouseSpecs from "./Components/About.tsx";
import Bookshelf from "./Components/Bookshelf.tsx";
import Author from "./Components/Author.tsx";

function App() {
    return (
        <div className="site-container">
            <Header />
            <HeroChamber />

            <main className="main-content">
                <PublishingHouseSpecs />
                <Bookshelf />
                <Author />
            </main>

            {/* 6. MINIMALIST FOOTER */}
            <footer id="contact" className="site-footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Owl & Elk Press. All rights reserved.</p>
                    <p>Inquiries: <a href="mailto:dianaforwriting@gmail.com">dianaforwriting@gmail.com</a></p>
                </div>
            </footer>
        </div>
    );
}

export default App;
