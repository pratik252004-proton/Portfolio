import { FaLinkedin , FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

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

export default function Footer(){
  return(
    <footer className="realtive overflow-hidden bg-black">
    <motion.div className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
    initial={{opacity:0 , y:30}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.8}}
    >
      <h1 className="font-semibold leading-none text-white text-center select-none"
      style={{
      fontSize: "clamp(3rem,5vw,14rem)",
      letterSpacing: "o.0.2em",
      lineHeight: 0.9,
      padding: "0 3vw",
      whiteSpace: "nowrap",
      textShadow: "0 2px 18px rgba(0,0,0,0.45)"
      }}
      >
      Pratik Meshram
      </h1>
      <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400"/>

      <div className="text-2xl md:text-3xl text-gray-300 transition-colors duration-200 inline-flex items-center justify-center gap-5">
        {socials.map(({Icon ,label ,href }) => (
          <motion.a href={href} 
          key={label}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          variants={glowVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          >
            <Icon/>
          </motion.a>
        ))}
      </div>
      <p className="text-gray-300 italic max-w-xl">
        "Exploring the universe of possibilities through AI and innovation."
      </p>
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Pratik Meshram. All rights reserved.
      </p>
    </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_3%_at_70%_95%,rgba(13,88,202,0.35),transparent_70%)]"/>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_3%_at_35%_97%,rgba(16,185,129,0.30),transparent_70%)]"/>
    </footer>
  )
}
