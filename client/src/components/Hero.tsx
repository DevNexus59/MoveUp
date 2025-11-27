import "./Hero.css";
import { Link } from "react-router";
import abdos from "../assets/images/abdos2.jpg";
import etirement from "../assets/images/etirement4.jpg";
import runner from "../assets/images/runner3.jpg";
import yoga from "../assets/images/yoga1.jpg";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

function Hero({
  // title = "",
  subtitle = "L'entraînement où vous voulez, quand vous voulez, comme vous voulez !",
}: HeroProps) {
  const images = [
    { name: "étirement", src: etirement },
    { name: "runner", src: runner },
    { name: "yoga", src: yoga },
    { name: "abdos", src: abdos },
  ];

  const duplicateImages = [...images, ...images];

  return (
    <section className="hero">
      <div className="hero-slider">
        {duplicateImages.map((img, i) => (
          <img
            key={`slide-${img.name}-${i}`}
            src={img.src}
            alt={img.name}
            className="hero-image"
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-h1">{subtitle}</h1>
        {/* <h2 className="hero-h2">{subtitle}</h2> */}
        <div className="hero-buttons">
          <Link to="/Pages/Entrainements">
            <button type="button" className="hero-btn">
              Découvrir les exercices
            </button>
          </Link>
          <Link to="/Pages/Tarifs">
            <button type="button" className="hero-btn">
              Voir nos offres
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
