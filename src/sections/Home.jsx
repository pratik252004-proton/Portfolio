import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin , FaGithub } from "react-icons/fa6"
import Robo from "../assets/Robo.png";

const socials = [
  {Icon : FaLinkedin , label : "LinkedIn" , href : "https://www.linkedin.com/in/pratik-meshram-3b322b321/"},
  {Icon : FaGithub , label : "Github" , href : "https://github.com/pratik252004-proton"},
]

const glowVariants = {
  initial : {scale : 1, y : 0, filter : "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"},
  hover : {
    scale : 1.2, y : -3,
    filter : "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition : {type : "spring" , stiffness : 300 , damping : 15}
  },
  tap : {scale : 0.95 , y : 0, transition : {duration : 0.08}}
}


export default function Home(){

  const roles = useMemo(() => ["AI/ML Engineer","Open CV","Data Analyst","IoT + AI Engineer"],[]);

  const [index , setIndex] = React.useState(0);
  const [subIndex , setSubIndex] = React.useState(0);
  const [deleting , setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
  if (!deleting && subIndex < current.length) {
    setSubIndex(v => v + 1);
  } else if (!deleting && subIndex === current.length) {
    setDeleting(true);
  } else if (deleting && subIndex > 0) {
    setSubIndex(v => v - 1);
  } else if (deleting && subIndex === 0) {
    setDeleting(false);
    setIndex(p => (p + 1) % roles.length);
  }
  }, !deleting && subIndex === current.length ? 1200 : deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  } ,[subIndex , index , deleting , roles])

  return(
    <section 
    id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground/>
      <div className="absolute inset-0">
        <div
        className="absolute -top-32 -left-32 
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        max-w-125 max-h-125
        rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse"></div>
        <div
        className="absolute -bottom-10 -right-10 
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        max-w-125 max-h-125
        rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center lg:items-start h-full relative">
        <div className="w-full lg:pl-40 lg:pr-24 mx-auto max-w-7xl">
      
      <motion.div className="mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
        initial={{opacity:0 , y: 12}}
        animate={{opacity:1 , y:0}}
        transition={{duration:0.6}}
      >
        <span>
          {roles[index].substring(0, subIndex)}
        </span>
        <span className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle" style={{height: "1em"}}>
        </span>
      </motion.div>

      
      <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text
      bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] leading-tight drop-shadow-lg"
      initial={{opacity:0 , y:40}}
      animate={{opacity:1 , y:0}}
      transition={{duration:1}}
      >
        Hello, I'm
        <br/>
        <span className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl lg:whitespace-nowrap">
          Pratik Meshram
        </span>
      </motion.h1>

      <motion.p className="mt-2 text-lg lg:text-base md:text-lg text-gray-300 max-w-7xl mx-auto lg:mx-1"
      initial={{opacity:0 , y:20}}
      animate={{opacity:1 , y:0}}
      transition={{delay:0.4 , duration:0.8}}
      >
      Working at the intersection of Computer Vision, Machine Learning, and Data Science 
      to build AI solutions that are accurate, scalable, and practical. Always exploring 
      better ways to transform ideas into intelligent applications.
      </motion.p>

      <motion.div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 0.8 , duration: 0.8}}
      >
        <a href="#projects"
        className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
        >View My Work</a>
        <a href="/Pratik_CV_Resume.pdf"
        download className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
        >My Resume</a>
      </motion.div>

      <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
        {socials.map(({Icon , label , href}) =>(
          <motion.a 
          href={href}
          key={label}
          target="_blank"
          aria-label={label}
          rel="noopener noreferrer"
          variants={glowVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="text-gray-300"
          >
            <Icon/>
          </motion.a>
        ))}

      </div>

        </div>

      </div>

      <div>
        <div className="relative hidden lg:block h-full">
          <div
          className="absolute top-[40%] -translate-y-1/2 pointer-events-none"
          style={{
            right: "40%" , width: "min(22vw , 410px)" , height: "min(30vw , 560px)" , borderRadius: "50%",
            filter: "blur(38px)" , opacity: 0.32 ,
            background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
          }}
          />

          <motion.img src={Robo} alt="AIRobot" 
          className="absolute top-[50%] -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
            right : "100px" , width : "min(45vw , 780px)" , maxHeight : "100vh"
          }}
          initial={{opacity:0, y:40, scale:0.98}}
          animate={{opacity:1, y:0, scale:1}}
          transition={{delay: 0.2, duration:0.8}}
          />
        </div>
      </div>

      </div>
    </section>
  )
}