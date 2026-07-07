import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
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
        bottom-8
        animate-popIn
        right-8
        z-[999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        transition-all
        duration-300
        hover:scale-110
        hover:bg-white/20
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-5"
        }
      `}
    >
      <ChevronUp size={24} className="text-white" />
    </button>
  );
}
