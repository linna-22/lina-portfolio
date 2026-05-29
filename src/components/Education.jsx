import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "AGA Institute",
    year: "2020 - 2024",
  },
  {
    degree: "Bachelor of English Language",
    school: "National Institute of Business",
    year: "2020 - 2024",
  },
  {
    degree: "Short Course in C/C++ Programming",
    school: "ETEC Center",
    year: "2023",
  },
  {
    degree: "Short Course in Web Frontend Development",
    school: "ETEC Center",
    year: "2025",
  },
  {
    degree: "Short Course in Web Backend Development",
    school: "ICT Professional Training Center",
    year: "2025",
  },
  {
    degree: "Scholarship in Web Backend Development",
    school: "ETEC Center",
    year: "2026",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Education" />

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-2xl
                p-6
                hover:border-cyan-500
                transition
              "
            >
              <span className="text-cyan-400">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.school}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;