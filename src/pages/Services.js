import React, { useState } from 'react';
import {motion} from "framer-motion"
import ServiceCard from "../components/ServiceCard"
import TekSkills from "../components/Tekskills";
import BtnMobile from '../components/Base_element/external_element/BtnMobile';
export default function Services() {
  const [openParagraphIndex, setOpenParagraphIndex] = useState(-1);
  const titleWebDev = `I can design and develop bespoke software to address your specific requirements, whether it's a web, mobile, or desktop application. I'm here to transform your ideas into high-quality code.`;
  const titlePerf =
    "If you have an existing application that's sluggish or inefficient, I can optimize it to enhance performance and user satisfaction. Every millisecond counts, and swift loading is crucial.";
  const titleSec = "Data security is paramount. I can assist you in safeguarding sensitive data and implementing top-notch cybersecurity practices to prevent breaches. "
  const titleGreen = `"I don't just stop after the project is done. I provide ongoing tech support, maintenance, and updates to keep your software up to date. Plus, I'm all about 'green code' practices, making sure your software runs efficiently and is environmentally friendly."`;

  const toggleParagraph = (index) => {
    if (openParagraphIndex === index) {
      setOpenParagraphIndex(-1);
    } else {
      setOpenParagraphIndex(index);
    }
  };
  const isDesktop = window.innerWidth > 840;

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    >
    <main className="main-service">
      <h1 id="my-service">What I Can Do For You:</h1>
      <div className="service-container">
        <ServiceCard
          title="Custom Software Development"
          textDescription={titleWebDev}
          isOpen={openParagraphIndex === 0}
          toggleParagraph={() => toggleParagraph(0)}

        />
        <ServiceCard
          title="Performance Optimization"
          textDescription={titlePerf}
          isOpen={openParagraphIndex === 1}
          toggleParagraph={() => toggleParagraph(1)}

        />
        <ServiceCard
          title=" Technical Support & Green Code"
          textDescription={titleGreen}
          isOpen={openParagraphIndex === 2}
          toggleParagraph={() => toggleParagraph(2)}
        />
        <ServiceCard
          title="Data Security"
          textDescription={titleSec}
          isOpen={openParagraphIndex === 3}
          toggleParagraph={() => toggleParagraph(3)}
        />
      </div>
      <h2 id="my-stack">My stack</h2>
      <TekSkills />
      {!isDesktop ? <BtnMobile /> : null}
    </main>
      </motion.div>

  )
}


