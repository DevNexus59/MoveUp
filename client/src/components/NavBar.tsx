import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`NavBar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="NavBar-header-container">
        <NavLink to="/" className="NavBar-header-link-logo">
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="NavBar-header-logo"
          />
        </NavLink>

        <nav className={`NavBar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/pages/Entrainements">Entraînements</NavLink>
          <NavLink to="/pages/Tarifs">Tarifs</NavLink>
          <NavLink to="/pages/About">À Propos</NavLink>
          <NavLink to="/pages/Connexion">Connexion</NavLink>
        </nav>

        {/* Hamburger menu accessible */}
        <button
          type="button"
          className="NavBar-hamburger"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
