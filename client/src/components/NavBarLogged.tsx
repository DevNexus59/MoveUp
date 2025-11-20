import { useState } from "react";
import { NavLink } from "react-router";
import "./NavBar.css";

function NavBarLogged() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // Activation du menu avec Enter ou Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // empêche le scroll avec Space
      toggleMenu();
    }
  };

  return (
    <header className="NavBar-header">
      <div className="NavBar-header-container">
        <NavLink to="/" className="NavBar-header-link-logo">
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="NavBar-header-logo"
          />
        </NavLink>

        <nav className={`NavBar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/pages/Dashboard">Accueil</NavLink>
          <NavLink to="/pages/Planning">Planning</NavLink>
          <NavLink to="/pages/Exercices">Exercices</NavLink>
          <NavLink to="/pages/Favoris">Favoris</NavLink>
          <NavLink to="/pages/Profil">Profil</NavLink>
          <NavLink to="/pages/Contact">Contact</NavLink>
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

export default NavBarLogged;
