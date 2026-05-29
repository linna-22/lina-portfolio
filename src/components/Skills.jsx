import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
    ],
  },
  {
    title: "UX/UI Design",
    skills: [
        "Figma",
    ],
  },
  {
    title: "Deployment/Hosting",
    skills: [
        "Vercel",
        "GitHub Pages",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle title="Skills" />

        <div className="grid md:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-slate-800
                    hover:bg-cyan-500
                    transition
                    cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;