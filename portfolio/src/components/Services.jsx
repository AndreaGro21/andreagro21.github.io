import ServiceCard from "./ServiceCard"
function Services (){
const titleWebDev = `In the world of web development, one key aspect that sets apart successful websites is performance. Fast-loading websites are essential for user satisfaction and search engine rankings." 
"No matter the website type, our performance-focused web development team tailors solutions to meet specific needs. "
"We understand that every millisecond counts and is committed to delivering a website that loads swiftly, engages effectively, and drives results.`;
const titlePerf = 
"No matter the website type, our performance-focused web development team tailors solutions to meet specific needs. " +
"We understand that every millisecond counts and is committed to delivering a website that loads swiftly, engages effectively, and drives results.";
const titleSec = "In the world of web development, one key aspect that sets apart successful websites is performance. Fast-loading websites are essential for user satisfaction and search engine rankings." + 
"No matter the website type, our performance-focused web development team tailors solutions to meet specific needs. " 
    return(
        <article>
        <h2 id="my-service">My Services</h2>
        <div className="service-container">
        <ServiceCard 
        title= "Web Development"
        textDescription = {titleWebDev}
        />
        <ServiceCard 
        title= "Performance"
        textDescription = {titlePerf}
        />
         <ServiceCard 
        title= " Optimization & Green Code"
        textDescription = {titlePerf}
        />
        <ServiceCard 
        title= "Security" 
        textDescription = {titleSec}
        />
        </div>
        </article>
    )
}

export default Services


/* aggiungere green code */