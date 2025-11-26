import "./HeroSecondary.css";

interface HeroSecondaryProps {
  title: string;
  subtitle: string;
  image?: string;
}

function HeroSecondary({ title, subtitle, image }: HeroSecondaryProps) {
  return (
    <section className="hero-secondary">
      <div className="hero-secondary-image">
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className="hero-secondary-content">
        <h1 className="hero-secondary-title">{title}</h1>
        <p className="hero-secondary-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSecondary;
