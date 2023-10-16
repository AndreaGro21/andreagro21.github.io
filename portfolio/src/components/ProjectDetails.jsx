function ProjectDetails({ projectTitle,source, }) {

    return (
       
        <div>
            <h4><span>Title: </span>{projectTitle}</h4>
             <img src={source} alt={projectTitle} />
            <div>Stack:</div>
            </div>
        
    )
}

export default ProjectDetails