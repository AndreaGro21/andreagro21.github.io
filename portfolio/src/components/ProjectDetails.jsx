import { Link } from "react-router-dom"

function ProjectDetails({ projectTitle,source, }) {



    return (
       
        <div>
            <p>client:</p>
            <p>What I've done:</p>
            <div>The stuck</div>
<Link   to={`/projects`}>Go back to Projects</Link>
        </div>
        
    )
}

export default ProjectDetails