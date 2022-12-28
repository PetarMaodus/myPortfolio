import Image from 'next/image';
import Styles from './hero.module.css';

function Hero() {
    return (
        <div className={Styles.field}>
            <div className={Styles.named}>
                <h1 className={ Styles.header }>Hello World!</h1>
                <h3>Welcome to my site!</h3>
                <h3>My name is Petar Maodus.</h3>
            </div>
                <Image src="/20057052_4200_1_07.png" alt="Astronaut with a balloon of earth" width={300} height={300} className={Styles.image} />
            
        </div>
        
        );

}
export default Hero;