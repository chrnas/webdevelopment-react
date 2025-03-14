import Footer from '../components/Footer.jsx'
import OfferCard from './OfferCard.jsx'

export default function HomePage() {

    return (
        <>
         <main>
            <div className="banner">
                <h1>Välkommen till vallstadens pizzeria</h1>
                <h2>
                    Vi strävar efter att erbjuda det bästa inom pizza, grill och kebab
                </h2>
            </div>
            <div className="main-content">
                <div className="offer-lane">
                    <OfferCard offerCardDescription='En klassisk pizza med tomatsås, mozzarella och färsk basilika – enkel och smakrik.'
                                offerText='Rea 20 %'
                                altText='pizza, margarita'
                                redirectLink='/menu?filter=Margherita'
                    />
                    <OfferCard offerCardDescription='En pizza med tomatsås, mozzarella och skinka – en fyllig och härlig favorit!'
                                offerText='Rea 30 %'
                                altText='pizza, vesuvio'
                                redirectLink='/menu?filter=Vesuvio'
                    />
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}