import { business } from "../../utils/constants.js";
import Navigation from "../Navigation/Navigation.jsx";
import Icon from "../Icon/Icon.jsx";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="header-strip">
        <div className="header-strip__inner">
          <span className="header-strip__location">
            <Icon name="pin" /> Serving Las Cruces & Deming
          </span>
          <span className="header-strip__hours">Monday–Friday · 8 AM–5 PM</span>
          <a className="header-strip__phone" href={business.phoneHref}>
            {business.phone}
          </a>
        </div>
      </div>
      <header className="header">
        <div className="header__inner">
          <a
            className="header__brand"
            href="#home"
            aria-label={`${business.name}, home`}
          >
            <img
              className="header__logo"
              src={business.logo}
              alt=""
              width="390"
              height="218"
            />
            <span className="header__name">
              Orthopedic Services
              <span className="header__subname">/ Kids LLC</span>
            </span>
          </a>
          <Navigation />
        </div>
      </header>
    </>
  );
}
