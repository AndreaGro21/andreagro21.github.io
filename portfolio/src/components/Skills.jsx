import Tag from "./Tag"
 import htmlImg from "../assets/img/tag-img/html.png" 
 import cssImg from "../assets/img/tag-img/css.png"
 import jsImg from "../assets/img/tag-img/javascript.png"
 import sassImg from "../assets/img/tag-img/sass.png"
 import reactImg from "../assets/img/tag-img/react.png"
 import bsImg from "../assets/img/tag-img/bootstrap.png"
 import reduxImg from "../assets/img/tag-img/redux.png"

export default function Skills(){
 
const languageWeb =
[
{
  "name":"HTML",
  "type": "",
  "img": htmlImg,
},
{
  "name":"CSS",
  "type": "",
  "img": cssImg,
},
 
{
  "name":"SASS",
  "type": "",
  "img":sassImg ,
},
{
  "name":"JAVASCRIPT",
  "type": "",
  "img":jsImg ,
},
{
  "name":"REACT",
  "type": "",
  "img": reactImg,
},
{
  "name":"REDUX",
  "type": "",
  "img": reduxImg,
}, 
{
  "name":"BOOTSTRAP",
  "type": "",
  "img":bsImg ,
},
]

return (
  <article className="skills-container">
  <div className="soft-skill_container">
<h4>Soft-skills</h4>
  </div>
  <div className="tech-skill_container">
  <h4>Technical-skills</h4>
  <div className="tag-container">
  {languageWeb.map((index) => (
        <Tag 
        key={index.name}
        idx={index}
        />
      ))
      }
  </div>
  </div>
    </article>
    )
}