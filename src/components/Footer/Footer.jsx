import { business, navigationLinks } from "../../utils/constants.js";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a className="footer__brand-link" href="#home">
            <img
              className="footer__logo"
              src={business.logo}
              alt=""
              width="390"
              height="218"
              loading="lazy"
            />
            <span className="footer__name">Orthopedic Services / Kids LLC</span>
          </a>
          <p className="footer__tagline">{business.tagline}</p>
        </div>
        <nav className="footer__navigation" aria-label="Footer navigation">
          {navigationLinks.map((link) => (
            <a className="footer__link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          {business.facebookUrl && (
            <a
              className="footer__link"
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          )}
        </nav>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Orthopedic Services / Kids LLC</span>
        <span>Personalized care. Right here in New Mexico.</span>
      </div>
    </footer>
  );
}
