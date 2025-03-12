import Footer from '../components/Footer.jsx'

export default function FindUsPage() {
    return (
        <>
            <main>
                <div className="banner">
                    <h1>Hitta oss</h1>
                    <h2>
                    VALLASTADENS PIZZA, GRILL, KEBAB <br/>
                    Johannes Magnus väg 42 <br/>
                    582 28 LINKÖPING
                    </h2>
                </div>
                <div className="main-content">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.2928975800562!2d15.579342205778767!3d58.393831285508185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f724a7fae57%3A0x3343cf643059a164!2sVallastadens%20Pizzeria!5e0!3m2!1ssv!2sse!4v1739809451862!5m2!1ssv!2sse" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    </div>
            </main>
            <Footer />
        </>
    );
}