import Styles from './projects.module.css';
import IconGhub from '../icons/IconGhub';
import Quotegener from '../projects/generquote';
import Board from '../projects/tictactoe';
import Reviews from '../projects/reviws';
import Image from 'next/image';
function Projects() {
    return (
        <div className={Styles.field}>
            <h2>My Projects:</h2>
            <div> <h3>1. Random quote generator</h3>
            <Quotegener /></div>
           
            <div><h3>2. Tic Tac Toe</h3>
            <Board /></div>
            
            <div><h3>3. Reviews</h3>
            <Reviews /></div>
            <div>
                <h3>Check the full list on my github page! : </h3>
                <a href="https://github.com/PetarMaodus" target="_blank"><IconGhub /></a>
            </div>
            
            <Image src="/10764053_2130.png" alt="Astronaut waving" width={300} height={300} className={Styles.image} />

        </div>
        )
}
export default Projects;