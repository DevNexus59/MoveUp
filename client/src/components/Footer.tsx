import { Link } from "react-router";

import "./Footer.css";

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer = ({ companyName = "MoveUp", year = 2026 }: FooterProps) => {
  return (
    <footer className="footer">
      <p>
        {companyName} © {year} - All rights reserved.
      </p>
      <p className="footer-mentionlegales">
        {" "}
        <Link to="/pages/MentionsLegales">
          Terms & Conditions | Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
