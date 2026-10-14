import { business, faqs } from "../../utils/constants.js";
import "./Faq.css";
export default function Faq() {
  return (
    <section className="faq" id="faqs" aria-labelledby="faq-heading">
      <div className="faq__intro">
        <p className="eyebrow">Here to help</p>
        <h2 className="section-heading" id="faq-heading">
          A little clarity.
          <br />A little peace of mind.
        </h2>
        <p className="faq__description">
          Have a question about your care? Start here, or give our office a
          call.
        </p>
        <a className="text-link" href={business.phoneHref}>
          {business.phone}
        </a>
      </div>
      <div className="faq__list">
        {faqs.map((faq) => (
          <details className="faq__item" key={faq.question}>
            <summary className="faq__question">
              {faq.question}
              <span className="faq__toggle" aria-hidden="true" />
            </summary>
            <p className="faq__answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
