import SectionTitle from "./SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const contacts = [
  {
    title: "Email",
    value: "linaoeu567556@gmail.com",
    link: "mailto:linaoeu567556@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Phone",
    value: "+855 96 322 7665",
    link: "tel:+855963227665",
    icon: FaPhone,
  },
  {
    title: "Telegram",
    value: "@Linaa_oeu",
    link: "https://t.me/Linaa_oeu",
    icon: FaTelegram,
  },
  {
    title: "GitHub",
    value: "linamey2212-creator",
    link: "https://github.com/linna-22",
    icon: FaGithub,
  },
  {
    title: "Facebook",
    value: "Lina Oeu",
    link: "https://web.facebook.com/dt6x4o6kwv/",
    icon: FaFacebook,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Let's Connect" />

        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaboration, job opportunities,
          freelance work, or simply to connect.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                target={
                  item.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  relative
                  bg-slate-900
                  border
                  border-slate-800
                  p-6
                  rounded-2xl
                  text-center
                  hover:border-cyan-500
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]
                  transition-all
                  duration-300
                "
              >
                <Icon className="mx-auto text-cyan-400 text-4xl mb-4" />

                <h3 className="font-bold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm break-words">
                  {item.value}
                </p>

                {(item.title === "Telegram" ||
                  item.title === "GitHub" ||
                  item.title === "Facebook") && (
                  <FaArrowUpRightFromSquare
                    className="
                      absolute
                      top-4
                      right-4
                      text-slate-500
                      group-hover:text-cyan-400
                      transition
                    "
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;