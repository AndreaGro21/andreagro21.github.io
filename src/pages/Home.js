import React from "react"
import Main from "..Main.jsx"
import Nav from "../components/Base_element/Nav"
import {motion} from "framer-motion"
function Home() {
    return (
        <motion.div
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{width:window.innerWidth, transition:{duration:0.4}
        }}
        >
            <Nav />
            <main>
            <Main />
            </main>
        </motion.div>
    )
}
export default Home