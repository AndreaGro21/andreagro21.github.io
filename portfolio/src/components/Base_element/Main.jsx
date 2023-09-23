import React from 'react'
import Video from '../Video'
import Services from "../Services"
import Projects from "../Projects"
import Skills from "../Skills"
function Main() {
    return (
        <>
            <header>
                <Video />
            </header>
            <main>
                <Services />
                <Skills />
                <Projects />
            </main>
        </>
    )
};
export default Main