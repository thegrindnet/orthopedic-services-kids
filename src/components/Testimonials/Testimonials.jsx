import { reviews } from "../../utils/constants.js";
import "./Testimonials.css";
export default function Testimonials() {
  if (!reviews.length) return null;
  return (
    <section className="testimonials" aria-label="Patient reviews">
      {reviews.map((review) => (
        <figure
          className="testimonials__review"
          key={`${review.author}-${review.text}`}
        >
          <blockquote className="testimonials__quote">{review.text}</blockquote>
          <figcaption className="testimonials__author">
            {review.author}
            {review.sourceUrl && (
              <a
                className="testimonials__source"
                href={review.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read review
              </a>
            )}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
