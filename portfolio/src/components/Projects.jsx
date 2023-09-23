import ProjectCard from "./ProjectCard"
import Kasa_cover from "portfolio/src/assets/img/Kasa_cover.jpg"
function Projects(){

    return(
<article>
<h2>Projects</h2>
<div className="projects-container">
<ProjectCard
projectTitle = "kasa" 
projectDes = "lorem"
source = {Kasa_cover}/>
<ProjectCard 
projectTitle = "OhmyFood" 
projectDes = "lorem"
source =  {Kasa_cover}/>
<ProjectCard 
projectTitle = "Nina-Carducci" 
projectDes = "lorem"
source =  {Kasa_cover}/>
</div>
</article>



    )

}

export default Projects