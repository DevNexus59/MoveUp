import { useEffect, useState } from "react";
import scrollUpIcon from "../assets/images/scroll-up.svg";
import "./ScrollUpButton.css";

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          scrollToTop();
        }
      }}
      className={`scroll-up ${isVisible ? "visible" : "hidden"}`}
      aria-label="Remonter en haut"
    >
      <img
        src={scrollUpIcon}
        alt=""
        className="scroll-up-icon"
        aria-hidden="true"
      />
    </button>
  );
}

export default ScrollUpButton;
