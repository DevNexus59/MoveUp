import { Link } from "react-router";

import facebook from "../assets/images/footer-facebook.png";
import instagram from "../assets/images/footer-instagram.png";
import tiktok from "../assets/images/footer-tiktok.png";

import "./Footer.css";

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer = ({ companyName = "MoveUp", year = 2026 }: FooterProps) => {
  return (
    <footer className="footer">
      <section className="footer-section-contact">
        <div className="footer-rappel-identite">
          <p>
            <strong>MoveUp,</strong>
          </p>
          <p>
            <em>Votre partenaire fitness pour atteindre vos objectifs.</em>
          </p>
        </div>
        <div className="footer-lien-contact">
          <p>
            <Link to="/pages/Contact">Contactez-nous !</Link>
          </p>
        </div>
        <div className="footer-reseaux-sociaux">
          <Link to="https://www.facebook.com/">
            <img
              src={facebook}
              alt="réseau social Facebook"
              className="footer-logo-reseau"
            />
          </Link>
          <Link to="https://www.instagram.com">
            <img
              src={instagram}
              alt="réseau social Instagram"
              className="footer-logo-reseau"
            />
          </Link>
          <Link to="https://www.tiktok.com">
            <img
              src={tiktok}
              alt="réseau social Tiktok"
              className="footer-logo-reseau"
            />
          </Link>
        </div>
      </section>
      <section className="footer-conditions">
        <p>
          {companyName} © {year} - All rights reserved.
        </p>
        <p>
          {" "}
          <Link to="/pages/MentionsLegales">
            Terms & Conditions | Privacy Policy
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
