import { Link } from 'react-router-dom';

function ProjectCard({ projectTitle, projectDes, source, id , idLink}) {

    return (
        <>
            <Link
                to={`/projects/${id}`}
                key={id}
                className="prj-card_container">
                <h2 className='prj-title'>
                    {projectTitle}
                </h2>
                <img src={source} alt={projectTitle} />
                <div className='desc-text'>
                Click on the image for additional information
                </div>
            </Link >
        </>
    )
}

export default ProjectCard


