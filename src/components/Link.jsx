
import github from "../assets/tag-img/github.png"
import gmail from "../assets/img/linkLogo/gmail.png"
import linkedin from "../assets/img/linkLogo/linkedin-logo.png"
import whatsapp from "../assets/img/linkLogo/whatsapp.png"



export default function Link() {

    return (
        <div className="logo-contact_container">
               <a href="https://wa.me/33631814032">
                   <img src={whatsapp} alt="whaaatsUp bro" />
               </a>
            <a href="https://www.linkedin.com/in/andrea-gronchi-58399416a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedl"  />
            </a>
            <button data-tf-popup="IPk2Zqn4" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Mail Contact Form" data-tf-transitive-search-params data-tf-medium="snippet">
                <script src="//embed.typeform.com/next/embed.js"></script>
                <img src={gmail} alt="Gmail" />
            </button>
            <a href="https://github.com/AndreaGro21" target="_blank" rel="noopener noreferrer">
                <img className="toosmall" src={github} alt="GitHub" />
            </a>

        </div>
    )
}





