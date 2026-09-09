import './App.css';
import Header from './Components/Header';
import HeroChamber from "./Components/HeroChamber.tsx";
import PublishingHouseSpecs from "./Components/About.tsx";
import Bookshelf from "./Components/Bookshelf.tsx";
import Author from "./Components/Author.tsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const today = new Date();
        const month = today.getMonth();
        
        if (month >= 8 && month <= 10) {
            document.body.setAttribute('data-theme', 'autumn');
        } else {
            document.body.setAttribute('data-theme', 'default');
        }
    }, []);
    
    return (
        <div className="site-container">
            <Header />
            <HeroChamber />

            <main className="main-content">
                <PublishingHouseSpecs />
                <Bookshelf />
                <Author />
            </main>

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
