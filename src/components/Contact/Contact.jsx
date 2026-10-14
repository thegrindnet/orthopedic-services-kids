import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <div className="contact__content">
          <p className="eyebrow">Your next step starts here</p>
          <h2 className="section-heading" id="contact-heading">
            Let’s find your
            <br />
            right support.
          </h2>
          <p className="contact__intro">
            Questions about orthotics, insurance, or an evaluation? We’re here
            to help you take the next step.
          </p>
          <div className="contact__details">
            <div className="contact__detail">
              <Icon name="phone" />
              <div>
                <span className="contact__label">Call our office</span>
                <a className="contact__phone" href={business.phoneHref}>
                  {business.phone}
                </a>
                <a className="contact__cell" href={business.cellHref}>
                  Cell: {business.cell}
                </a>
              </div>
            </div>
            <div className="contact__detail">
              <Icon name="mail" />
              <div>
                <span className="contact__label">Email us</span>
                <a className="contact__link" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </div>
            </div>
            <div className="contact__detail">
              <Icon name="clock" />
              <div>
                <span className="contact__label">Office hours</span>
                <span className="contact__value">{business.hours}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__location">
          <img
            className="contact__photo"
            src={business.office}
            alt="Las Cruces office building, as pictured in the practice’s location brochure"
            width="749"
            height="557"
            loading="lazy"
          />
          <div className="contact__location-body">
            <span className="contact__location-eyebrow">
              Visit us in Las Cruces
            </span>
            <h3 className="contact__location-title">
              We look forward to meeting you.
            </h3>
            <address className="contact__address">
              {business.address}
              <br />
              {business.city}
            </address>
            <a
              className="button button_view_primary"
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" />
              Get directions
              <Icon />
            </a>
            <p className="contact__area">Serving Las Cruces and Deming</p>
          </div>
        </div>
      </div>
    </section>
  );
}
