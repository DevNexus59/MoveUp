import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
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

  //accessibilite ++
  const navRef = useRef<HTMLElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Fermer avec ESC + clic en dehors
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDownEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      // Si on clique ni sur le nav/bouton on ferme le menu
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDownEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }

    if (!menuOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <header className="NavBar-header">
      <div className="NavBar-header-container">
        <NavLink to="/" className="NavBar-header-link-logo">
          <img src={logo} alt="move up" className="NavBar-header-logo" />
        </NavLink>

        <nav
          ref={navRef}
          className={`NavBar-links ${menuOpen ? "active" : ""}`}
        >
          <NavLink to="/pages/Dashboard" ref={firstLinkRef}>
            Accueil
          </NavLink>
          <NavLink to="/pages/Planning">Planning</NavLink>
          <NavLink to="/pages/Entrainements">Entraînements</NavLink>
          <NavLink to="/pages/Favoris">Favoris</NavLink>
          <NavLink to="/pages/Profil">Profil</NavLink>
          <NavLink to="/pages/Contact">Contact</NavLink>
        </nav>

        {/* Hamburger menu accessible */}
        <button
          ref={buttonRef}
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
