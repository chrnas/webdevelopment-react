import Footer from "../components/Footer";
import menuItems from "./menu-items";
import MenuDisplay from './MenuDisplay';

export default function MenuPage() {
    
    return (
        <>
            <main>
                <div className="banner">
                    <h1>Meny</h1>
                    <h2>
                    Mån-söndag 11.00-21.00
                    </h2>
                </div>
                <div className="main-content">
                    <MenuDisplay items={menuItems}/>
                </div>
            </main>
            <Footer />
        </>
    );
}