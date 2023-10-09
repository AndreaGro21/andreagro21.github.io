
function Tag(idx){
  
    let idx2 = idx.idx
    return(
        <div className="tag-card" >
            
<img src={idx2.img} alt={idx2.name}></img>
<h5>{idx2.name}</h5>
<p>{idx2.type}</p>
        </div>
    )
}
export default Tag