import Tag from "./Tag"
import SoftSkills from "./SoftSkills"
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
  "type": "markup language",
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
];


const softSkills = [
  {
    skill: "Effective Communication",
    description: "Being able to clearly communicate ideas, progress, and challenges with team members and clients is crucial."
  },
  {
    skill: "Collaboration",
    description: "Working well in a team is essential for the success of a front-end project. Listening to others' opinions and contributing constructively are important skills."
  },
  {
    skill: "Critical Thinking",
    description: "Being able to assess and solve problems analytically is essential for addressing front-end development challenges."
  },
  {
    skill: "Creativity",
    description: "Creativity is useful for designing engaging user interfaces and finding innovative solutions to problems."
  },
  {
    skill: "Time Management",
    description: "Being able to plan and manage your time efficiently is crucial for meeting project deadlines."
  },
  {
    skill: "Adaptability",
    description: "The world of web development is constantly evolving, so it's important to be flexible and willing to learn new technologies and approaches."
  },
  {
    skill: "Empathy",
    description: "Understanding the needs of users and clients is crucial for creating successful user experiences."
  },
  {
    skill: "Stress Management",
    description: "Working in front-end development can be stressful at times. The ability to manage stress in a healthy way is important for maintaining good mental health."
  },
  {
    skill: "Patience",
    description: "Resolving code issues can take time and patience. It's important to avoid frustration and approach problems calmly."
  },
  {
    skill: "Self-Learning",
    description: "Since web technologies change rapidly, it's crucial to be self-driven and willing to invest time in continuous learning."
  },
  {
    skill: "Problem-Solving",
    description: "The ability to efficiently and creatively solve complex problems in web development is highly valued."
  },
  {
    skill: "Attention to Detail",
    description: "Being meticulous and thorough in your work ensures that you produce high-quality and error-free code."
  },
  {
    skill: "Presentation Skills",
    description: "If you need to showcase your work to clients or team members, strong presentation skills can be valuable in conveying your ideas effectively."
  },
  {
    skill: "Conflict Resolution",
    description: "In a collaborative environment, conflicts may arise. Being skilled in resolving conflicts diplomatically helps maintain a positive work atmosphere."
  },
  {
    skill: "Customer Focus",
    description: "Putting the needs and expectations of end-users and clients at the forefront of your work is essential for creating user-friendly and successful web applications."
  }
];


return (
  <article className="skills-container">
  <div className="soft-skill_container">
<h4>Soft-skills</h4>
{softSkills.map((index) => (
        <SoftSkills 
        key={index.skill}
        idx={index}
        />
      ))
      }
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