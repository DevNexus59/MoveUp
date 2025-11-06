import { NavLink } from "react-router";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="NavBar-header">
      <div className="NavBar-header-container">
        <NavLink to="/" className="NavBar-header-link-logo">
          <img src="" alt="logo" className="NavBar-header-logo" />
        </NavLink>
        <nav className="NavBar-links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/pages/Entrainements">Entraînements</NavLink>
          <NavLink to="/pages/Tarifs">Tarifs</NavLink>
          <NavLink to="/pages/About">À Propos</NavLink>
          <NavLink to="/pages/Connexion">Connexion</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
