import Image from 'next/image';
import Styles from './expirience.module.css';
function Expirience() {
    return (
        <div className={Styles.field}>
        <div>
        <h2>Previous expirience:</h2>
        <ul>
            <li>No expirience in IT industry yet.</li>
            <li>NaN</li>
            <li>NaN</li>
        </ul>
            </div>
            <div className={Styles.imgdiv}>
                <Image src="/6100_9_02.png" alt="Astronaut thinking" fill className={Styles.image} sizes="100vh" />
            </div>
    </div>
    );

}
export default Expirience;