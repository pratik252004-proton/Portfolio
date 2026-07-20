import ParticlesBackground from "../components/ParticlesBackground";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nvidia from "../assets/Nvidia.png";
import Linkedin from "../assets/Linkedin.png";
import IBM from "../assets/IBM.png"
import { FaTimes } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { FiExternalLink } from "react-icons/fi";

import { 
  SiNvidia,
  SiCoursera,  
} from "react-icons/si";

import {
  FaLinkedin,
  FaTrophy,
  FaFileAlt,
  FaBookOpen,
  FaRocket,
  FaCertificate,
} from "react-icons/fa";

export default function AwardsCertification() {
  const [setPreview] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  {selectedCertificate && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedCertificate(null)}
  >
    <img
      src={selectedCertificate}
      alt="Certificate"
      className="max-w-[90%] max-h-[90%] rounded-xl"
    />
  </div>
)}

  const achievements = [
    {
      title: "Animal Tracking & Health Monitoring Belt",
      issuer: "Provision",
      date: "Jan 2025",
      icon: FaFileAlt,
      type: "Patent",
      image:"Patent",
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "Aug 2024",
      icon:  SiNvidia,
      type: "Certificate",
      image: Nvidia,
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Apr 2025",
      icon: SiCoursera, 
      type: "Certificate",
      image: IBM,
    },
    {
      title: "Explore a Career in Data Analysis",
      issuer: "LinkedIn Learning",
      date: "Apr 2026",
      icon: FaLinkedin,
      type: "Certificate",
      image: Linkedin,
    },
  ];

  const marqueeItems = [
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "FastAPI",
    "Python",
    "Data Science",
    "AI Engineering",
    "Computer Vision",
  ];

  const stats = [
  {
    value: "15+",
    label: "Certificates",
    description: "Industry-recognized credentials",
    icon: FaCertificate,
  },
  {
    value: "3",
    label: "Awards",
    description: "Competition & project achievements",
    icon: FaTrophy,
  },
  {
    value: "4+",
    label: "Years Learning",
    description: "Continuous modern tech development",
    icon: FaBookOpen,
  },
  {
    value: "2022-26",
    label: "CSE Journey",
    description: "Building innovative AI-Driven solutions",
    icon: FaRocket,
  },
];


  return (
    <section
      id="awardscertification"
      className="relative overflow-hidden py-10 bg-[#06070a]"
    >
    <ParticlesBackground/>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[140px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="
            text-4xl
            md:text-7xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            Awards & Certificates
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            A collection of achievements, certifications and recognition
            earned during my Computer Engineering journey.
          </p>
        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div
            className="
            rounded-3xl
            p-[1px]
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
          "
          >
            <div
              className="
              rounded-3xl
              bg-black/40
              backdrop-blur-xl
              p-10
            "
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div>
                  <p className="text-cyan-400 font-semibold">
                    FEATURED ACHIEVEMENT
                  </p>

                  <h3 className="text-4xl font-bold text-white mt-3">
                    1st Winner Smart India Hackathon Award
                  </h3>

                  <p className="text-gray-400 mt-5">
                    🏆 First Prize Winner – Embedded Intelligent Microscopy System
                    Created an AI-driven microscopy solution for real-time identification 
                    and counting of microscopic marine organisms, enabling faster and more accurate biological analysis.
                  </p>

                 <motion.a href="https://drive.google.com/drive/folders/1TrNs_BFOEv8Et7l1GC6l8OlgjIARiuIW?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{y: -4,scale: 1.05}}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full
                  bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 text-white font-semibold shadow-lg
                  hover:shadow-cyan-500/50 transition-all duration-300">
                  View Credential<motion.div
                  whileHover={{ rotate: -45, x: 3 }}
                  transition={{ duration: 0.2 }}>
                  <FiExternalLink size={18} />
                </motion.div>
                </motion.a>
                </div>

                <div className="flex justify-center">

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 4, -4, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="relative"
                  >
                    <div
                      className="
                      absolute
                      inset-0
                      bg-yellow-400/20
                      blur-3xl
                      rounded-full
                    "
                    />

                    <FaTrophy
                      size={180}
                      className="text-yellow-400"
                    />
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee */}

        <div className="overflow-hidden mt-16">

          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems].map(
              (item, index) => (
                <div
                  key={index}
                  className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  text-cyan-300
                  shrink-0
                "
                >
                  {item}
                </div>
              )
            )}
          </motion.div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tilt
                key={index}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                scale={1.03}
                perspective={1000}
                transitionSpeed={2000}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() =>
                    setPreview(item)
                  }
                  onMouseLeave={() =>
                    setPreview(null)
                  }
                  className="group relative"
                >
                  <div
                    className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-500
                    opacity-0
                    blur-xl
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                  />

                  <div
                    className="
                    relative
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    p-6
                    h-full
                  "
                  >
                    <div
                      className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-500/20
                      to-purple-500/20
                      flex
                      items-center
                      justify-center
                    "
                    >
                      <Icon
                        size={32}
                        className="text-cyan-400"
                      />
                    </div>

                    <span className="text-cyan-400 text-xs uppercase mt-4 block">
                      {item.type}
                    </span>

                    <h3 className="text-white font-bold text-l mt-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-3">
                      {item.issuer}
                    </p>

                    <p className="text-gray-500 text-sm mt-6">
                      {item.date}
                    </p>

                    <button onClick={() => setSelectedCertificate(item.image)}
                    className="mt-5 text-cyan-400">
                      View Certificate →
                    </button>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

        {/* Certificate Preview */}

        <AnimatePresence>
  {selectedCertificate && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0
        bg-black/80
        backdrop-blur-sm
        flex items-center justify-center
        z-[999]
        p-4
      "
      onClick={() => setSelectedCertificate(null)}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        whileHover={{
          scale: 1.15,
          rotate: 90,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSelectedCertificate(null)}
        className="
          absolute
          top-6
          right-6
          w-12
          h-12
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-cyan-400/30
          flex
          items-center
          justify-center
          text-white
          shadow-lg
        "
      >
        <FaTimes size={20} />
      </motion.button>

      {/* Certificate */}
      <motion.img
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        src={selectedCertificate}
        alt="Certificate"
        className="
          max-w-[90vw]
          max-h-[90vh]
          rounded-2xl
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-24">

           {stats.map((item) => {
           const Icon = item.icon;
             return (
            <motion.div key={item.label || item.value}>
              <div className="p-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40">
              <div className="rounded-3xl bg-[#0B1220] p-8 text-center h-full">
                
                <div className="flex justify-center mb-5">
                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {item.value}
                </h3>

                <p className="text-white font-semibold mt-3">
                  {item.label}
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>

              </div>
            </div>
            </motion.div>
             );
          })}

        </div>

      </div>
    </section>
  );
}