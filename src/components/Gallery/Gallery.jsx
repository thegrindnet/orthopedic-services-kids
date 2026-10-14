import { useRef, useState } from "react";
import { galleryItems } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
import "./Gallery.css";
export default function Gallery() {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(galleryItems[0]);
  const open = (item) => {
    setSelected(item);
    dialog.current.showModal();
  };
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="gallery__inner">
        <div className="gallery__intro">
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 className="section-heading" id="gallery-heading">
              Different needs.
              <br />
              The same thoughtful care.
            </h2>
          </div>
          <p className="gallery__description">
            Explore bracing and support options shown in our practice materials.
            Your own orthotic care begins with an individual evaluation.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <button
              className="gallery__item"
              key={item.title}
              onClick={() => open(item)}
              aria-label={`Enlarge photo: ${item.title}`}
            >
              <div className="gallery__image-wrap">
                <img
                  className="gallery__image"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="188"
                  height="258"
                />
                <span className="gallery__enlarge" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="gallery__category">{item.category}</span>
              <span className="gallery__title">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      <dialog
        className="gallery__dialog"
        ref={dialog}
        aria-labelledby="gallery-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
      >
        <div className="gallery__dialog-content">
          <button
            className="gallery__close"
            autoFocus
            onClick={() => dialog.current.close()}
            aria-label="Close enlarged photo"
          >
            Close ×
          </button>
          <img
            className="gallery__expanded-image"
            src={selected.src}
            alt={selected.alt}
          />
          <h3 className="gallery__dialog-title" id="gallery-dialog-title">
            {selected.title}
          </h3>
          <span className="gallery__dialog-note">
            <Icon name="heart" /> Orthopedic Services / Kids LLC
          </span>
        </div>
      </dialog>
    </section>
  );
}
