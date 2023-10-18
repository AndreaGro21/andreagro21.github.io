import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Kasa_cover from "../assets/img/kasa.webp";
import OhmyFood from "../assets/img/ohmyfood.webp";
import event77 from "../assets/img/77event.webp";
import moon from "../assets/img/moon.png"
function Projects() {
    const projectsData = [
        {
            id: "",
            projectTitle: "Kasa",
            projectDes: "Kasa has been in the private flat rental business for almost 10 years now. With more than 500 ads posted every day, Kasa is one of the leading flat rental companies in France.",
            source: Kasa_cover,
        },
        {
            id: "",
            projectTitle: "OhMyFood",
            projectDes: "Interesting project that allowed me to develop my UX-UI skills for this young start-up about to launch on the French market.",
            source: OhmyFood,
        },
        {
            id: "",
            projectTitle: "77-events",
            projectDes: `Really challenging for this debugging project,
            a major events company found itself without a developer, 
            I threw myself into this project with specific requirements and little time available.`,
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
                <button onClick={prevProject}>
                    <img className="arrow-left" src={moon} alt="arrow-left"></img>
                </button>
                <ProjectCard
                    id={projectsData[currentProjectIndex].projectTitle}
                    projectTitle={projectsData[currentProjectIndex].projectTitle}
                    projectDes={projectsData[currentProjectIndex].projectDes}
                    source={projectsData[currentProjectIndex].source}
                />
                <button onClick={nextProject}>
                    <img className="arrow-right" src={moon} alt="arrow-right"></img>
                </button>
            </div>
        </article>
    );
}

export default Projects;