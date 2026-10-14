import { useEffect, useRef, useState } from "react";
import { navigationLinks, business } from "../../utils/constants.js";
import "./Navigation.css";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const root = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  return (
    <nav
      className="navigation"
      aria-label="Main navigation"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        className="navigation__toggle"
        ref={toggle}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span className="navigation__menu-mark" aria-hidden="true">
          {open ? "×" : "☰"}
        </span>
      </button>
      <div
        className={`navigation__links${open ? " navigation__links_open" : ""}`}
        id="main-navigation"
      >
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            className="navigation__link"
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="button button_view_primary navigation__call"
          href={business.phoneHref}
        >
          Call our office <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
