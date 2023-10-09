

function ProjectCard({ projectTitle, projectDes, source }) {

    return (
        <div className="prj-card_container">
            <h4>{projectTitle}</h4>
            <p>{projectDes}</p>
            <img src={source} alt={projectTitle} />
        </div>
    )
}

export default ProjectCard


//Slider solo se piu di 4 elementi? posso farmi un data.json??
