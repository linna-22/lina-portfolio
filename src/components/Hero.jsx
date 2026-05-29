import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-400 mb-4 font-medium tracking-wider"
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Lina Oeu
        </motion.h1>

        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl text-cyan-400 mt-4 font-semibold h-16"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Web Developer",
              2000,
              "React Developer",
              2000,
              "UX/UI Designer",
              2000,
              "UI Developer",
              2000,
              "Dashboard Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Passionate Web Developer with experience building
          responsive web applications, service management systems,
          and modern user interfaces using React, JavaScript,
          Tailwind CSS, PHP, and Laravel.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/linamey2212-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://t.me/Linaa_oeu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaTelegram size={28} />
          </a>

          <a
            href="https://web.facebook.com/dt6x4o6kwv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;