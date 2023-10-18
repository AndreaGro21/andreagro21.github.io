import { Link } from 'react-router-dom';

function ProjectCard({ projectTitle, projectDes, source, id }) {

    return (
        <>
            <Link
                to={`/projects/${id}`}
                key={id}
                className="prj-card_container">
                <h4>
                    {projectTitle}
                </h4>
                <img src={source} alt={projectTitle} />
                <div className='desc-text'>
                    {projectDes}
                </div>
            </Link >
        </>
    )
}

export default ProjectCard


