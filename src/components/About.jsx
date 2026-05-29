import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full object-cover rounded-3xl overflow-hidden border-4 border-cyan-500">
              <img
                src={profile}
                alt="Lina Oeu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Web Developer</h3>

            <p className="text-slate-400 leading-relaxed">
              I am a passionate Web Developer from Cambodia with experience in
              developing modern web applications and online service platforms. I
              have worked on registration systems, dynamic service forms,
              certificate generation systems, and responsive user interfaces. I
              enjoy solving problems, learning new technologies, and building
              applications that create real value for users.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 text-3xl font-bold">3+</h4>
                <p>Years Experience</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400 text-3xl font-bold">20+</h4>
                <p>Projects Built</p>
              </div>
            </div>

            <a
              href="/Lina-CV.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                px-6
                py-3
                bg-cyan-500
                rounded-lg
                hover:bg-cyan-600
                hover:scale-105
                transition-all
                duration-300
                font-medium
            "
            >
              <FaDownload className="text-sm" />
              Download My CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
