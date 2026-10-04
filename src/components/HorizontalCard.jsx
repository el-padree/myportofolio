import React from 'react';

const HorizontalCard = ({
  image,
  date,
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" aria-hidden="true">
        <span className="timeline-dot" />
      </div>

      <article className="neo-card">
        <div className="neo-card-media">
          <img src={image} alt={title} className="neo-card-img" />
        </div>

        <div className={`neo-card-content${buttonText ? '' : ' neo-card-content--no-action'}`}>
          <div className="neo-card-header">
            {date && <span className="neo-card-date">{date}</span>}
            <h3 className="neo-card-title">{title}</h3>
          </div>

          <p className="neo-card-description">{description}</p>

          {buttonText && (
            <div className="neo-card-footer">
              <button className="neo-card-btn" onClick={onButtonClick}>
                {buttonText} <span className="neo-btn-arrow">&rarr;</span>
              </button>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default HorizontalCard;