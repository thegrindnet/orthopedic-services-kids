import { business, services } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./Services.css";
export default function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services__intro">
        <div>
          <p className="eyebrow">Thoughtful care. Personal solutions.</p>
          <h2 className="section-heading" id="services-heading">
            The right support starts
            <br />
            with understanding you.
          </h2>
        </div>
        <p className="services__intro-text">
          No two people move through life in quite the same way. Our orthotic
          services are tailored to your needs, your comfort, and your everyday
          life.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service) => (
          <article className="services__card" key={service.title}>
            <span className="services__icon">
              <Icon name={service.icon} />
            </span>
            <p className="services__category">{service.category}</p>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__text">{service.text}</p>
          </article>
        ))}
      </div>
      <div className="services__evaluation">
        <div className="services__evaluation-copy">
          <strong className="services__evaluation-title">
            Not sure where to start?
          </strong>
          <span className="services__evaluation-text">
            An individual evaluation considers posture, alignment, movement, and
            support needs.
          </span>
        </div>
        <a className="text-link" href={business.phoneHref}>
          Let’s talk about your needs <Icon />
        </a>
      </div>
    </section>
  );
}
