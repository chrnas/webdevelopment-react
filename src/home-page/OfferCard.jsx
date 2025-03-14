import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function OfferCard({offerCardDescription, offerText, altText, redirectLink}) {

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
      <img src="./src/assets/margarita.webp" alt={altText} />
      <div className="offer-text">
        <h3>Margarita</h3>
        <div className="offer-text">{offerText}</div>
        {isDescriptionVisible && <p>{offerCardDescription}</p>}
      </div>
    </div>
  );
}
