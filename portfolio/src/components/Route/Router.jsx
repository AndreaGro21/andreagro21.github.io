import React from "react"
import { Route, Routes } from 'react-router-dom'
import Main from "../Base_element/Main"
import Error from "../../pages/Error"
import AboutMe from "../../pages/AboutMe"
import ServicesEtSkills from "../../pages/ServicesEtSkills"
import Projects from "../../pages/Projects"
import ProjectDetails from "../ProjectDetails"
function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Error />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/services" element={<ServicesEtSkills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:Id" element={<ProjectDetails />} />
        </Routes>
    )
}
export default MainRoute


