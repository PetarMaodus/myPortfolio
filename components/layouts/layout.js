import Styles from './layout.module.css';
import Navbar from '../navbar';
import Footer from '../footer';
import Hero from '../parts/hero';
function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Hero />
            <div className={ Styles.page } >{children}</div>
            <Footer />
        </>
        );
}
export default Layout;