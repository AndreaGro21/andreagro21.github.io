import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Kasa_cover from "../assets/img/Kasa_cover.jpg";
import OhmyFood from "../assets/img/ohmyf.webp";
import event77 from "../assets/img/77event.webp";
import arrowL from "../assets/img/arrow_left.png"
import arrowR from "../assets/img/arrow_right.png"
function Projects() {
    const projectsData = [
        {
            id:"",
            projectTitle: "Kasa",
            projectDes: "Kasa has been in the private flat rental business for almost 10 years now. With more than 500 ads posted every day, Kasa is one of the leading flat rental companies in France.",
            source: Kasa_cover,

        },
        {
            id:"",
            projectTitle: "OhmyFood",
            projectDes: "lorem",
            source: OhmyFood,
        },
        {
            id:"",
            projectTitle: "77-events",
            projectDes: "lorem",
            source: event77,
        },
    ];
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    console.log(currentProjectIndex)
    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };
    return (
        <article>
            <h2>Projects</h2>
            <div className="projects-container">
                <button onClick={prevProject}><img src={arrowL} alt="arrow-left"></img></button>
                <ProjectCard
                    id= {projectsData[currentProjectIndex].projectTitle}
                    projectTitle={projectsData[currentProjectIndex].projectTitle}
                    projectDes={projectsData[currentProjectIndex].projectDes}
                    source={projectsData[currentProjectIndex].source}
                />
                <button onClick={nextProject}><img src={arrowR} alt="arrow-right"></img></button>
            </div>
        </article>
    );
}

export default Projects;