import Footer from '../components/Footer.jsx'
import OfferCard from './OfferCard.jsx'

export default function HomePage() {

    const margharitaParams = {
        descriptionId: 'margaritha-offercard-description',
        ingredientsId: 'margaritha-offercard-ingredients',
        offerCardDescription: 'En klassisk pizza med tomatsås, mozzarella och färsk basilika – enkel och smakrik.',
        offerText: 'Rea 20 %',
        src: './src/assets/margarita.webp',
        altText: 'pizza, margarita'
    }

    const vesuvioParams = {
        descriptionId: 'vesuvio-offercard-description',
        ingredientsId: 'vesuvio-offercard-ingredients',
        offerCardDescription: 'En pizza med tomatsås, mozzarella och skinka – en fyllig och härlig favorit!',
        offerText: 'Rea 30 %',
        src: './src/assets/vesuvio.webp',
        altText: 'pizza, vesuvio'
    }

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
                    <OfferCard params={margharitaParams}/>
                    <OfferCard params={vesuvioParams}/>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}