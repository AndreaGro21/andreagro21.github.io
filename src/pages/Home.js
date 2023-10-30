import React from "react"
import Main from "..Main.jsx"
import Nav from "../components/Base_element/Nav"
import {motion} from "framer-motion"
function Home() {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        >
            <Nav />
            <main>
            <Main />
            </main>
        </motion.div>
    )
}
export default Home