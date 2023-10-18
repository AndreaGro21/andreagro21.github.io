import ServiceCard from "./ServiceCard"
import TekSkills from "./Tekskills";
function Services (){
const titleWebDev = `I can design and develop bespoke software to address your specific requirements, whether it's a web, mobile, or desktop application. I'm here to transform your ideas into high-quality code.`;
const titlePerf = 
"If you have an existing application that's sluggish or inefficient, I can optimize it to enhance performance and user satisfaction. Every millisecond counts, and swift loading is crucial.";
const titleSec = "Data security is paramount. I can assist you in safeguarding sensitive data and implementing top-notch cybersecurity practices to prevent breaches. " 
const titleGreen = `"I don't just stop after the project is done. I provide ongoing tech support, maintenance, and updates to keep your software up to date. Plus, I'm all about 'green code' practices, making sure your software runs efficiently and is environmentally friendly."`;
    return(
        <article>
        <h2 id="my-service">What I Can Do For You:</h2>
      {/*   <p>Technology has the power to transform your business and enhance efficiency in many ways. I'm here to guide you on this journey and ensure you gain the utmost value from your software development investment.</p> */}
        <div className="service-container">
        <ServiceCard 
        title= "Custom Software Development"
        textDescription = {titleWebDev}
        />
        <ServiceCard 
        title= "Performance Optimization"
        textDescription = {titlePerf}
        />
         <ServiceCard 
        title= " Technical Support & Green Code"
        textDescription = {titleGreen}
        />
        <ServiceCard 
        title= "Data Security" 
        textDescription = {titleSec}
        />
        </div>
        <h2 id="my-stack">My stack</h2>
        <TekSkills />
        </article>

    )
}

export default Services


/* aggiungere green code */