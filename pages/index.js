
import Expirience from '../components/parts/expirience';
import Skils from '../components/parts/skils';
import Projects from '../components/parts/projects';
import FadeInOnScroll from '../components/layouts/fadein';
export default function Home() {
    
  return (
      <div>
          
          <FadeInOnScroll><Expirience /></FadeInOnScroll>
          <Skils />
          <Projects />
         
    </div>
  )
}
