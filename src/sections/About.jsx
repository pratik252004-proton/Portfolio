import { motion } from "framer-motion";
import Profile from "../assets/Profile.png"
import ParticlesBackground from "../components/ParticlesBackground";

export default function About(){

  const stats = [
    {label : "1st Winner" , value : "Smart India Hackthon 2025"},
    {label : "Speciality" , value : "Machine Learning & Data Science"},
    {label : "Focus" , value : "Data-Driven AI Solutions"},
  ];
  const glows = [
    "top-5 -left-10 w-[250px] h-[250px] opacity-15 blur-[120px]",
    "bottom-0 right-10 w-[250px] h-[250px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-[40%] -translate-x1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-10 blur-[100px]",
  ]
  return(
    <section id="about"
    className="min-h-screen w-full flex item-center justify-center relative bg-black text-white overflow-hidden">
    <ParticlesBackground/>

      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c,i) => (
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}/>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 md:px-10 lg:px-5 py-20 flex flex-col gap-12">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
        initial={{opacity:0 , y:24}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6}}
        viewport={{once:true , amount:0.4}}
        >
          <motion.div className="relative w-[180px] h-[180px] md:w-[250px] md:h-[250px]
          rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
          whileHover={{scale:1.02}}
          transition={{type:"spring" , stiffness:200 , damping:20}}
          >
            <img src={Profile} alt="profile" className="absolute inset-0"/>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              Pratik Meshram
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              AI-ML Engineer
            </p>
            <p className="mt-2 text-gray-300 leading-relaxed text-base sm:text-l max-w-4xl md:max-w3xl">
            Computer Science graduate with a strong foundation in
            Artificial Intelligence, Machine Learning, and Data Science. Experienced in
            developing predictive models, data preprocessing, and exploratory data
            analysis using Python, Scikit-learn, Pandas, and NumPy. Passionate about
            solving real-world problems through AI and seeking an entry-level AI/ML
            role to contribute technical expertise while continuously learning and
            growing in the field.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-4 max-w-xl">
              {stats.map((item , i) => (
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{opacity:0 , y:10}}
                whileInView={{opacity:1 , y:0}}
                transition={{delay:0.05*i , duration:0.4}}
                viewport={{once:true , amount:0.3}}
                >
                <div className="text-sm text-gray-400">{item.label}</div>
                <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4  flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-300 transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}