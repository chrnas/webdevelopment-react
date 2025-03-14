import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function OfferCard({title, description, offerText, altText, redirectLink, src}) {

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const navigate = useNavigate();

  function expandOfferCard() {
    setDescriptionVisible(true);
  }

  function collapseOfferCard() {
    setDescriptionVisible(false);
  }

  return (
    <div
      onMouseOver={expandOfferCard}
      onMouseLeave={collapseOfferCard}
      onClick={() => navigate(redirectLink)}
      className="offer-card"
    >
      <img src={src} alt={altText} />
      <div className="offer-text">
        <h3>{title}</h3>
        <div className="offer-text">{offerText}</div>
        {isDescriptionVisible && <p>{description}</p>}
      </div>
    </div>
  );
}
