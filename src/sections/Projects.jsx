import { useEffect, useMemo, useRef, useState } from "react"

import PlanktonWeb from "../assets/PlanktonWeb.png"
import AeroFlameWeb from "../assets/AeroFlameWeb.png"
import BeltWeb from "../assets/BeltWeb.png"
import PlanktonApp from "../assets/PlanktonApp.png"
import AeroFlameApp from "../assets/AeroFlameApp.png"
import BeltApp from "../assets/BeltApp.png"
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion"

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile , setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(() => {
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change" , handler);
    return () => mql.removeEventListener("change" , handler);
  },[query])
  return isMobile;
}

export default function Projects(){
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(() => [
      {
        title: "Plankton-AI",
        link: "https://drive.google.com/drive/folders/1TrNs_BFOEv8Et7l1GC6l8OlgjIARiuIW?usp=drive_link",
        bgColor: "#31465F",
        image: isMobile ? PlanktonApp : PlanktonWeb,
      },
      {
        title: "Aero-Flame",
        link: "https://drive.google.com/drive/folders/13omGrY6pIAosdJU4RVOF4p82WZ8rttdQ?usp=drive_link",
        bgColor: "#0B1623",
        image: isMobile ? AeroFlameApp : AeroFlameWeb,
      },
      {
        title: "Animal Tracking Belt",
        link: "https://drive.google.com/drive/folders/1z5MIy3zrRSVFh7BNJ6-G8jqnIDVbDMu7?usp=drive_link",
        bgColor: "#0B1F1A",
        image: isMobile ? BeltApp : BeltWeb,
      },
    ],
    [isMobile] // return only when 'isMobile' changes
  );

  const {scrollYProgress} = useScroll({
    target:sceneRef,
    offset : ["start start" , "end end"]
  })
  const thresholds = projects.map((_,i) => (i+1)/projects.length)
  const [activeIndex , setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress , "change" , (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length -1 : idx)
  });

  const activeProject = projects[activeIndex];


  return(
    <section id="projects" ref={sceneRef} className="relative text-white"
    style={{
      height: `${100*projects.length}vh`,
      background: activeProject.bgColor,
      transition: "background-color 400ms ease"
    }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
       <motion.h2 initial={{ opacity: 0, y: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{duration: 0.8,ease: "easeOut",}}
        className="text-3xl sm:text-5xl font-black tracking-wide bg-gradient-to-r from-white via-gray-200 to-gray-400
        bg-clip-text text-transparent"
        animate={{backgroundPosition: ["0% 50%", "100% 50%"],}}
        transition={{ease: "linear",}}
      >
      My Work
    </motion.h2>
        <div className={`relative w-full flex-1 flex items-center justify-center ${
          isMobile ? "-mt-5" : "mt-9"
        }`}>
          {projects.map((project , idx) => (
            <div key={project.title}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              activeIndex === idx ? "opacity-100 z-20 " : "opacity-0 z-0 sm:z-10"
            }`}
            style={{width : "85%" , maxWidth : "1200px"}}
            > 

            <AnimatePresence mode="wait">
            {activeIndex === idx && (
              <motion.h3 key={project.title}
              initial={{opacity:0 , y:-30}}
              animate={{opacity:1 , y:0}}
              exit={{opacity:0 , y:30}}
              transition={{duration:0.5 , ease : "easeOut"}}
              className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0
                italic font-bold ${
                  isMobile ? "-mt-24" : "mt-1"
                }
                `}
                style={{
                  zIndex: 5,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {project.title}
              </motion.h3>
            )}
            </AnimatePresence>

            <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl 
              md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                isMobile ? "mb-6 rounded-lg" : "mb-4 sm:mb-8 rounded-xl"
              }
              h-[62vh] sm:h-[70vh]`}
              style={{zIndex:10 , transition:"box-shadow 250ms ease"}}
              >
              <img src={project.image} alt={project.title}
              className="w-full h-full object-fill drop-shadow-xl md:drop-shadow-2xl"
              style={{
                position : "relative",
                zIndex : 10,
                filter : "drop-shadow(0,16px 40px rgba(0,0,0, 0.65)",
                transition : "filter 200ms ease",
              }}
              loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0"
              style={{
                zIndex: 11,
                background: "linear-gradient(180deg , rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
              }}
              >

              </div>
            </div>

            </div>
          ))}
        </div>
          <div className={`absolute ${
            isMobile ? "bottom-20" : "bottom-1"
          }`}>
            <a href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={`View ${activeProject?.title}`}
            >View Project</a>
          </div>
      </div>

    </section>
  )
}