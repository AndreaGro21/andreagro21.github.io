const tagImages = require.context('../assets/tag-img');
const imageList = tagImages.keys().map(image => tagImages(image));
export default function TekSkills(){

return(

    <div className="tec-skills">
    {imageList.map((image, index) => (
        <div key={index} className="rotating-image">
      <img key={index} src={image} alt={`langage-${index}`} />
      </div>
    ))}
  </div>

)
}