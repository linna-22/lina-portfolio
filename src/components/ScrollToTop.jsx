import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
  fixed
  bottom-6
  right-6
  z-50
  w-12
  h-12
  flex
  items-center
  justify-center
  rounded-full
  bg-cyan-500
  text-white
  shadow-[0_0_20px_rgba(6,182,212,0.4)]
  hover:bg-cyan-600
  hover:scale-110
  transition-all
  duration-300
  cursor-pointer
  ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }
`}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;