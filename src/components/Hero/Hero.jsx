import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <span className="hero__dot" /> Orthotic care for every age
          </p>
          <h1 className="hero__heading" id="hero-heading">
            Personalized support.
            <br />
            <em className="hero__accent">For every step.</em>
          </h1>
          <p className="hero__description">
            From little first steps to everyday independence, find orthotic care
            that puts your individual needs first.
          </p>
          <p className="hero__detail">
            Custom orthotics, braces, and supports for children and adults in
            Las Cruces and Deming.
          </p>
          <div className="hero__actions">
            <a className="button button_view_primary" href={business.phoneHref}>
              <Icon name="phone" />
              Call our office
            </a>
            <a
              className="button button_view_secondary"
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" />
              Get directions
            </a>
          </div>
          <div className="hero__assurance">
            <Icon name="shield" />
            <span>Personal care with a board-certified orthotist</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <img
              className="hero__photo"
              src={business.office}
              alt="Exterior of the Las Cruces building shown in Orthopedic Services / Kids LLC’s location brochure"
              width="749"
              height="557"
              fetchPriority="high"
            />
            <div className="hero__photo-caption">
              <span className="hero__caption-label">
                YOUR LOCAL ORTHOTIC CARE
              </span>
              <span className="hero__caption-title">
                A little support.
                <br />A world of possibility.
              </span>
            </div>
          </div>
          <div className="hero__care-card">
            <span className="hero__care-symbol">
              <Icon name="heart" />
            </span>
            <div className="hero__care-text">
              <strong className="hero__care-title">Made around you.</strong>
              <span className="hero__care-description">
                Children. Adults. Individual needs.
              </span>
            </div>
          </div>
          <span className="hero__ornament" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
      <div className="hero__trust">
        <div className="hero__trust-item">
          <Icon name="check" />
          Board-certified orthotist
        </div>
        <div className="hero__trust-item">
          <Icon name="check" />
          Custom orthotics made in-house
        </div>
        <div className="hero__trust-item">
          <Icon name="check" />
          Most insurance plans accepted
        </div>
      </div>
    </section>
  );
}
