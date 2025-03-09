import React from 'react'

export default function HomePage() {
    return (
        <main>
            <div class="banner">
            <h1>Välkommen till vallstadens pizzeria</h1>
            <h2>
                Vi strävar efter att erbjuda det bästa inom pizza, grill och kebab
            </h2>
            </div>
            <div class="main-content">
            <div class="offer-lane">
                <div onmouseover="expandLeftOfferCard()" onmouseleave="collapseLeftOfferCard()" class="offer-card">
                <img src="src/assets/margarita.webp" alt="pizza, margarita" />
                <div id="left-offercard-description" class="offer-text">
                    <h3>Margaritha</h3>
                    <div class="offer-text">Rea 20%</div>
                </div>
                </div>
                <div onmouseover="expandRightOfferCard()" onmouseleave="collapseRightOfferCard()" class="offer-card">
                <img src="src/assets/vesuvio.webp" alt="pizza, vesuvio" />
                <div id="right-offercard-description" class="offer-text">
                    <h3>Vesuvio</h3>
                    <div class="offer-text">Rea 30%</div>
                </div>
                </div>
            </div>
            </div>
        </main>
    );
}