
import github from "../assets/tag-img/github.png"

import linkedin from "../assets/img/linkLogo/linkedin-logo.png"
import whatsapp from "../assets/img/linkLogo/whatsapp.png"

import MyFormPage from "./Base_element/external_element/MyFormPage"

export default function LogoLink() {

    return (
        <div className="logo-contact_container">
            <a href="https://wa.me/33631814032">
                <img src={whatsapp} alt="whaaatsUp bro" />
            </a>
            <a href="https://www.linkedin.com/in/andrea-gronchi-58399416a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedl" />
            </a>
            <MyFormPage />
            <a href="https://github.com/AndreaGro21" target="_blank" rel="noopener noreferrer">
                <img className="toosmall" src={github} alt="GitHub" />
            </a>

        </div>
    )
}





