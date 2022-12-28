import Styles from './navbar.module.css';
import Lights from './icons/lights';
import IconLinkIn from './icons/IconLinkIn';
import IconGhub from './icons/IconGhub';
function Navbar() {
    return (
        <div className={Styles.nav} >
            <p><span>made by</span> Petar Maodus</p>
            <div>
            <IconGhub />
            <IconLinkIn />
            <Lights />
            </div>
            
        </div>
        
        );
}
export default Navbar;