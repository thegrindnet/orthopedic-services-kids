import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./About.css";
export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__identity">
        <img
          className="about__logo"
          src={business.logo}
          alt="The practice’s green adult hands and red child hands logo"
          loading="lazy"
          width="390"
          height="218"
        />
        <p className="about__philosophy">
          Big care.
          <br />
          For every little
          <br />
          <em className="about__accent">and big step.</em>
        </p>
        <div className="about__signature">
          <span className="about__name">Joe A. Alvarado</span>
          <span className="about__credential">Board-certified orthotist</span>
        </div>
      </div>
      <div className="about__content">
        <p className="eyebrow">Get to know us</p>
        <h2 className="section-heading" id="about-heading">
          You’re a person.
          <br />
          Your care should feel personal.
        </h2>
        <p className="about__paragraph">
          At Orthopedic Services / Kids LLC, we believe support begins with
          listening. Joe A. Alvarado, our board-certified orthotist, works with
          children and adults to understand their individual needs.
        </p>
        <p className="about__paragraph">
          Each evaluation considers posture, alignment, movement, and everyday
          function. From pediatric bracing to adult orthopedic supports, we help
          you explore options designed for greater comfort and everyday
          mobility.
        </p>
        <div className="about__feature">
          <Icon name="check" />
          <span className="about__feature-copy">
            <strong className="about__feature-title">
              Made in-house, with you in mind
            </strong>
            <span className="about__feature-text">
              Custom foot orthotics fabricated for individual support needs.
            </span>
          </span>
        </div>
        <div className="about__feature">
          <Icon name="check" />
          <span className="about__feature-copy">
            <strong className="about__feature-title">
              Local care for our community
            </strong>
            <span className="about__feature-text">
              Serving children and adults in Las Cruces and Deming.
            </span>
          </span>
        </div>
        <a className="text-link about__link" href="#contact">
          Meet your next step with support <Icon />
        </a>
      </div>
    </section>
  );
}
