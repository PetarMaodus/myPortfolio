import Styles from './navbar.module.css';
import IconLinkIn from './icons/IconLinkIn';
import IconGhub from './icons/IconGhub';

function Navbar() {
    return (
        <div className={Styles.nav} >
            <a href="https://github.com/PetarMaodus" target="_blank" rel="noopener noreferrer"><IconGhub /></a>
            <a href="https://www.linkedin.com/in/petar-maodu%C5%A1-112794237/" target="_blank" rel="noopener noreferrer"><IconLinkIn /></a>
        </div>
        );
}
export default Navbar;