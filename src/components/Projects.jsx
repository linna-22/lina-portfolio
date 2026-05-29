import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

import portfolio_pro from "../assets/projects/portfolio_project.png";
import modern_store from "../assets/projects/modern_store.png";
import explore_cambodia from "../assets/projects/explore_cambodia.png";
import bec_system from "../assets/projects/bec_system.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my skills, experience, and projects. Built to present my professional.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: portfolio_pro,
    demo: "https://linamey2212-creator.github.io/O_Lina_Portfolio/",
    github: "https://github.com/linamey2212-creator",
  },

  {
    title: "Modern Stores E-Commerce",
    description:
      "Modern e-commerce website featuring product browsing, responsive design, and a clean shopping experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: modern_store,
    demo: "https://modern-stores.vercel.app/",
    github: "https://github.com/linamey2212-creator",
  },

  {
    title: "Explore Cambodia",
    description:
      "Tourism and travel website promoting Cambodia's destinations, culture, and attractions.Build with heart by lina-creator.",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: explore_cambodia,
    demo: "https://explore-cambodia-five.vercel.app/",
    github: "https://github.com/linamey2212-creator",
  },
  {
  title: "BEC Information System",
  description:
    "Developed and maintained the Board of Engineers Cambodia.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "PHP",
    "Laravel"
  ],
  image: bec_system,
  demo: "https://becis.mlvt.gov.kh/",
  github: "",
  featured: true,
},

];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projectSwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="
                  bg-slate-900
                  rounded-2xl
                  overflow-hidden
                  border
                  border-slate-800
                  hover:border-cyan-500
                  transition
                  h-full
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          px-3
                          py-1
                          text-sm
                          bg-slate-800
                          rounded-full
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex items-center
                        px-4
                        py-2
                        bg-cyan-500
                        rounded-lg
                        hover:bg-cyan-600
                        transition
                      "
                    >
                      <FaArrowUpRightFromSquare className="mr-2" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex items-center
                        px-4
                        py-2
                        border
                        border-cyan-500
                        rounded-lg
                        hover:bg-cyan-500/10
                        transition
                      "
                    >
                      <FaGithub className="mr-2" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;