
function SoftSkills(idx){
  
    let idx2 = idx.idx
    return(
        <div className="skill-card" >
            
<h5># {idx2.skill}</h5>
<p>{idx2.description}</p>
        </div>
    )
}
export default SoftSkills