import React from "react"
import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import Main from "../Base_element/Main"
/* import Error from "../../pages/Error" */
import AboutMe from "../../pages/AboutMe"
import Services from "../../pages/Services"
import Projects from "../../pages/Projects"
import ProjectDetails from "../ProjectDetails"
function MainRoute() {

const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/myportfolio/" element={<Main />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Main />} />
        </Routes>
        </AnimatePresence>
    )
}
export default MainRoute


