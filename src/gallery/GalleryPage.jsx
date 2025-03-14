import Footer from "../components/Footer";
import EmailForm from "./EmailForm";
import GalleryTable from "./GalleryTable";
import GalleryVideo from "./GalleryVideo";

export default function Gallery() {

    return (
        <>
            <main>
                <div className="banner">
                    <h1>Galleri</h1>
                    <h2>
                    Video på pizzor
                    </h2>
                </div>
                <div className="main-content">
                    <GalleryVideo />
                    <h2>
                        Kontakta oss gärna via mail om du har mediamaterial som skulle kunna bidra till vårt galleri
                    </h2>
                    <EmailForm />
                    <GalleryTable />

                    </div>
                </main>
                <Footer />
        </>
    );
}