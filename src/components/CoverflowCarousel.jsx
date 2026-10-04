import React, { useEffect, useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const CoverflowCarousel = ({
  children,
  items,
  initialIndex = 0,
  className = '',
  ariaLabel = 'Card carousel',
  previousLabel = 'Prev',
  nextLabel = 'Next',
}) => {
  const slides = items ?? React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(slides.length - 1, 0))
  );

  useEffect(() => {
    setActiveIndex((currentIndex) => Math.min(currentIndex, Math.max(slides.length - 1, 0)));
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className={`coverflow-carousel ${className}`} aria-label={ariaLabel}>
      <div className="coverflow-carousel__stage">
        {slides.map((slide, index) => {
          const offset = index - activeIndex;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <div
              className="coverflow-carousel__slide"
              key={React.isValidElement(slide) && slide.key ? slide.key : index}
              data-active={isActive}
              aria-current={isActive ? 'true' : undefined}
              aria-hidden={distance > 2}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: `translateX(${offset * 62}%) translateZ(${-distance * 90}px) rotateY(${offset * -32}deg) scale(${Math.max(0.64, 1 - distance * 0.12)})`,
                opacity: Math.max(0, 1 - distance * 0.28),
                zIndex: slides.length - distance,
                visibility: distance > 2 ? 'hidden' : 'visible',
                pointerEvents: distance > 2 ? 'none' : 'auto',
              }}
            >
              {slide}
            </div>
          );
        })}
      </div>

      <div className="coverflow-carousel__controls">
        <button
          type="button"
          className="coverflow-carousel__button"
          onClick={() => setActiveIndex((currentIndex) => Math.max(0, currentIndex - 1))}
          disabled={activeIndex === 0}
          aria-label={previousLabel}
        >
          <IoArrowBack aria-hidden="true" />
          <span>{previousLabel}</span>
        </button>
        <button
          type="button"
          className="coverflow-carousel__button"
          onClick={() => setActiveIndex((currentIndex) => Math.min(slides.length - 1, currentIndex + 1))}
          disabled={activeIndex === slides.length - 1}
          aria-label={nextLabel}
        >
          <span>{nextLabel}</span>
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default CoverflowCarousel;