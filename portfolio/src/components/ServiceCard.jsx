
function ServiceCard({title,textDescription, img }){
return(
    < div className="service-card_container">
    <h3>{title}</h3>
    <p>{textDescription}</p>
    <div>{img}</div>
    </div>
)
}
export default ServiceCard