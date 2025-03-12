import React from "react";
import Footer from "../components/Footer";

export default function Order() {
    return (
        <>
            <main>
                <div className="banner">
                    <h1>Beställ pizza</h1>
                    <h2>
                    Förbeställ eller beställ pizza för upphämtning igenom att ringa oss på:<br/>
                    Tel: <a href="tel:013104410">013-10 44 10</a>
                    </h2>
                </div>
                <div className="main-content">
                </div>
            </main>
            <Footer />
        </>
    );
}