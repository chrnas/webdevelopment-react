import Footer from '../components/Footer.jsx'
import OfferCard from './OfferCard.jsx'
import margaritaPic from '../../src/assets/margarita.webp'
import vesuvioPic from '../../src/assets/vesuvio.webp'

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
                    <OfferCard title='Margarita'
                        description='En klassisk pizza med tomatsås, mozzarella och färsk basilika – enkel och smakrik.'
                        offerText='Rea 20 %'
                        altText='pizza, margarita'
                        redirectLink='/menu?filter=Margherita'
                        src={margaritaPic}
                    />
                    <OfferCard title='Vesuvio'
                        description='En pizza med tomatsås, mozzarella och skinka – en fyllig och härlig favorit!'
                        offerText='Rea 30 %'
                        altText='pizza, vesuvio'
                        redirectLink='/menu?filter=Vesuvio'
                        src={vesuvioPic}
                    />
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}