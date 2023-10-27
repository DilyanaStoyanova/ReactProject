import logo from '../../assets/catcafelogo.png';
import './TopIconHome.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function TopIconHome() {

    return (
        <>
            <div id="top-icon-home">
                <a href="/"><img src={logo} /></a>
            </div>
            <div id="top-icon-menu" className="text-gold">
            <FontAwesomeIcon icon={faBars} id="menu-button"/>
            </div>
        </>
    );
}