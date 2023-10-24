import React from "react";
import { Link, useParams } from "react-router-dom";
import Kasa_cover from "../assets/img/kasa.webp";
import OhmyFood from "../assets/img/ohmyfood.webp";
import event77 from "../assets/img/77event.webp";




const projectsData = [
    {
        id: "Kasa",
        projectTitle: "Kasa",
        projectDes:
            "Kasa has been in the private flat rental business for almost 10 years now. With more than 500 ads posted every day, Kasa is one of the leading flat rental companies in France.",
        
            stack:` #REACT #JAVASCRIPT #SASS #HTML #FIGMA #GIT `,
        source: Kasa_cover,
        link: 'https://github.com/AndreaGro21/project_8_kasa'
    },
    {
        id: "OhMyFood",
        projectTitle: "OhMyFood",
        projectDes:
            "Interesting project that allowed me to develop my UX-UI skills for this young start-up about to launch on the French market.",
        stack: `#JAVASCRIPT #SASS #HTML #FIGMA #GIT `,
        source: OhmyFood,
        link: 'https://github.com/AndreaGro21/Gronchi_Andrea_4_032023'
    },
    {
        id: "77-events",
        projectTitle: "77-events",
        projectDes: `Really challenging for this debugging project,
      a major events company found itself without a developer, 
      I threw myself into this project with specific requirements and little time available.`,
        stack: "",
        source: event77,
        link: 'https://github.com/AndreaGro21/724events'
    },
];

function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <article className="prj-details_container">
            <h1>{project.projectTitle}</h1>
            <h2><span>Stack:</span>{project.stack}</h2>
            <img src={project.source} alt={project.projectTitle} />
            <p>{project.projectDes}</p>
            <div className="li-container">
            <a className="link-a1"  href={project.link} target="_blank" rel="noreferrer">GitHub</a>
            <Link className="link-a2" to="/projects">Go back to Projects</Link>
            </div>
        </article>
    );
}

export default ProjectDetails;
