import { useEffect, useRef, useState } from "react";
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
    <header className={`NavBar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="NavBar-header-container">
        <NavLink to="/" ref={firstLinkRef} className="NavBar-header-link-logo">
          <img
            src="../src/assets/logo.png"
            alt="move up"
            className="NavBar-header-logo"
          />
        </NavLink>

        <nav
          ref={navRef}
          className={`NavBar-links ${menuOpen ? "active" : ""}`}
        >
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/pages/Entrainements">Entraînements</NavLink>
          <NavLink to="/pages/Tarifs">Tarifs</NavLink>
          <NavLink to="/pages/About">À Propos</NavLink>
          <NavLink to="/pages/Connexion">Connexion</NavLink>
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

export default NavBar;
