import Styles from './skils.module.css';
import Image from 'next/image';
import FadeInOnScroll from '../layouts/fadein';
function Skils() {
    return (
        <div className={Styles.field}>
            <h2>Here are some language and frameworks i worked with:</h2>
            <FadeInOnScroll>
                <h3>HTML and CSS</h3>
                <Image src="/htmls.png" alt="html and css logos" width={300} height={250} />
                
            </FadeInOnScroll> 
            <FadeInOnScroll>
                <h3>JavaScript</h3>
                <Image src="/Unofficial_JavaScript_logo_2.svg.png" alt="javascript logo" width={280} height={280} />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <h3>React JS</h3>
                <Image src="/logo-react-js.png" alt="react js logo" width={280} height={280} />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <h3>Next JS</h3>
                <Image src="/next.png" alt="next js logo" width={280} height={280} />
            </FadeInOnScroll>
            <FadeInOnScroll>
                <h3>PHP</h3>
                <Image src="/php-logo-20743.png" alt="Php logo" width={280} height={280} />
            </FadeInOnScroll>
            <Image src="/6200_2_08.png" alt="Astronaut with a laptop" width={300} height={300} className={Styles.image} />

        </div>
    )
}
export default Skils;