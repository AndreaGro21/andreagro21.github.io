
function ServiceCard({ title, textDescription, img }) {
    return (
        <article className="service-card_container">
            <h3>{title}</h3>
            <p>{textDescription}</p>
            <div>{img}</div>
        </article>
    )
}
export default ServiceCard