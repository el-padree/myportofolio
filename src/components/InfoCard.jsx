import React from 'react';

const InfoCard = ({ icon: Icon, title, value, description, badge, className = '' }) => {
  return (
    <article className={`card ${className}`}>
      <div className="bio-card-head">
        {Icon && (
          <span className="bio-card-icon">
            <Icon />
          </span>
        )}
        <div>
          <p className="bio-card-title">{title}</p>
          {badge && <span className="bio-badge">{badge}</span>}
        </div>
      </div>
      <h3 className="bio-card-value">{value}</h3>
      {description && <p className="bio-card-copy">{description}</p>}
    </article>
  );
};

export default InfoCard;
