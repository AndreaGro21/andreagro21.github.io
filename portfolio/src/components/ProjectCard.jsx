import { Link } from 'react-router-dom';

function ProjectCard({ projectTitle, projectDes, source, id }) {

    return (
        <>
            <Link
                to={`/projects/${id}`}
                key={id}
                className="prj-card_container">
                <img src={source} alt={projectTitle} />
                <div>
                    <div>Description: </div>   {projectDes}
                </div>
                <h4>
                    <span>Title: </span>{projectTitle}
                </h4>
            </Link >
        </>
    )
}

export default ProjectCard


