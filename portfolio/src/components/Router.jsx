import React from "react"
import { Route, Routes } from 'react-router-dom'
import Main from "./Base_element/Main"
import Error from "../pages/Error"
import AboutMe from "../pages/AboutMe"


function MainRoute() {  
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Error />} />
            <Route path="/AboutMe" element={<AboutMe />}/>
        </Routes>
    )
}
export default MainRoute


