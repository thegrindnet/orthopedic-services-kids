import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./Insurance.css";
export default function Insurance() {
  return (
    <section className="insurance" aria-labelledby="insurance-heading">
      <div className="insurance__inner">
        <span className="insurance__icon">
          <Icon name="shield" />
        </span>
        <div className="insurance__content">
          <p className="insurance__eyebrow">One less question on your mind</p>
          <h2 className="insurance__heading" id="insurance-heading">
            Most insurance plans accepted.
          </h2>
          <p className="insurance__text">
            Call with your insurance information. We’ll help you confirm plan
            acceptance and discuss coverage for the services you need.
          </p>
        </div>
        <a className="button button_view_light" href={business.phoneHref}>
          Ask about your insurance <Icon />
        </a>
      </div>
    </section>
  );
}
