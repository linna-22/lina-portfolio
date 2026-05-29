import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    year: "2025 - Present",
    title: "Dashboard Developer",
    company: "Ministry of Labour and Vocational Training",
    description:
      "Developed interactive dashboards in Looker Studio connected to Google Sheets for real-time reporting and data analysis. Created automated reports, dynamic visualizations, and performance tracking dashboards to support data-driven decision making.",
  },
  {
    year: "2024 - 2025",
    title: "Web Developer",
    company: "Ministry of Labour and Vocational Training",
    description:
      "Designed and developed web interfaces for Board of Engineer Cambodia (BEC). Built registration and authentication systems, developed 7 online service request forms, implemented certificate generation workflows, and contributed to service management and payment processing features.",
  },
  {
    year: "2023",
    title: "Part-Time Teacher",
    company: "Mon Computer",
    description:
      "Taught English and Khmer to primary students while developing communication and presentation skills.",
  },
  {
    year: "2022 - 2023",
    title: "Technician",
    company: "Mon Computer",
    description:
      "Installed software, configured Windows systems, and assisted customers with computer purchases and technical support.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Experience" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-16 mb-12"
            >
              <div
                className="
                absolute
                left-0
                top-2
                w-8
                h-8
                rounded-full
                bg-cyan-500
                border-4
                border-slate-900
                "
              />

              <div
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
                <span className="text-cyan-400 font-medium">{exp.year}</span>

                <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>

                <p className="text-slate-300 mt-1">{exp.company}</p>

                <p className="text-slate-400 mt-4">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
