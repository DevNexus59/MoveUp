import type React from "react";

import "./Hero.css";

import abdos from "../assets/images/abdos2.jpg";
import etirement from "../assets/images/etirement4.jpg";
import runner from "../assets/images/runner3.jpg";
import yoga from "../assets/images/yoga1.jpg";

const images = [
  { name: "etirement", src: etirement },
  { name: "runner", src: runner },
  { name: "yoga", src: yoga },
  { name: "abdos", src: abdos },
];

const Hero: React.FC = () => {
  const duplicateImages = [...images, ...images];

  return (
    <section className="hero">
      <div className="hero-slider">
        {duplicateImages.map((img) => (
          <img
            key={`slide-${img.name}`}
            src={img.src}
            alt={img.name}
            className="hero-image"
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          <span>MoveUp</span>L'entrainement où tu veux, quand tu veux, comme tu
          veux
        </h1>
        <div className="hero-buttons">
          <button type="button" className="hero-btn">
            Découvrir les exercices
          </button>
          <button type="button" className="hero-btn">
            Voir nos offres
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
