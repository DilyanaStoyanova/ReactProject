import './MainMenu.css';

export default function MainMenuCover() {

    return (
        <nav className="main-menu">
            <ul className="menu-list">
                <li><a className="main-menu-link" href="/">HOME</a></li>
                <li><a className="main-menu-link" href="/book">BOOK NOW</a></li>
                <li><a className="main-menu-link" href="/meet-the-cats">MEET THE CATS</a></li>
                <li><a className="main-menu-link" href="/events">EVENTS</a></li>
                <li><a className="main-menu-link" href="http://www.catcafe.store">STORE</a></li>
                <li><a className="main-menu-link" href="/faq">FAQ'S</a></li>
                <li><a className="main-menu-link" href="/mission-statement">OUR MISSION</a></li>
                <li><a className="main-menu-link" href="/our-locations">OUR LOCATIONS</a></li>
                <li><a className="main-menu-link" href="/basket">BASKET</a></li>
            </ul>
        </nav>
    );
}