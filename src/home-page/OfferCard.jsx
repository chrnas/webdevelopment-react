
export default function OfferCard(params) {
    
    function expandOfferCard(){
        if (!document.getElementById(params.ingredientId)){
            const descriptionElement = document.createElement("p");
            descriptionElement.id = params.ingredientId;
            descriptionElement.innerHTML = params.offerCardDescription;
            const offerCardElement = document.getElementById(params.descriptionId);
            offerCardElement.appendChild(descriptionElement)
        }
    }
    
    function collapseOfferCard(){
        const description = document.getElementById(params.ingredientId)
        if (description){
            const offerCardElement = document.getElementById(params.descriptionId);
            offerCardElement.removeChild(description);
        }
    }
    
    return (
        <div onMouseOver={expandOfferCard} onMouseLeave={collapseOfferCard} className="offer-card">
            <img src='./src/assets/margarita.webp' alt={params.altText} />
            <div id={params.descriptionId} className="offer-text">
                <h3>Margaritha</h3>
                <div className="offer-text">{params.offerText}</div>
            </div>
        </div>
    );
}