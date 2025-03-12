import Footer from '../components/Footer';
import dailyLunchMenuItems from './daily-lunch-menu-items.json'
import DailyLunchMenu from './DailyLunchMenu';

export default function DailyLunchPage(){
    return (
        <>
            <main>
                <div className="banner">
                    <h1>Vi serverar dagens lunch</h1>
                    <h2>
                        Mån-fredag 11.00-14.30<br/>
                        110 kr    
                    </h2>
                </div>
                <div className="main-content">
                    <h1>Lunch meny</h1>
                    <DailyLunchMenu items={dailyLunchMenuItems} />
                </div>
            </main>
            <Footer />
        </>
    );
}