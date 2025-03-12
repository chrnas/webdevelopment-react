import Footer from "../components/Footer";

export default function Gallery() {

    function generateEmailFromForm(){
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const email = document.getElementById("email").value;
    
        const body = `Hej,\n\n${message}\n\nKind Regards \n${fname} ${lname}`;
        const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailToLink;
    }

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
                    <div className="videoArea">
                        <video controls>
                        <source src="./src/assets/video_pizza.mp4" type="video/mp4" alt="video, pizza" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="form-area">
                        <h2>
                            Kontakta oss gärna via mail om du har mediamaterial som skulle kunna bidra till vårt galleri
                        </h2>
                        <form method="post" encType="text/plain">
                            <label htmlFor="fname">Name:</label><br />
                            <input type="text" id="fname" name="fname" placeholder="Enter first name..." /><br />
                            <label htmlFor="lname">Last name:</label><br />
                            <input type="text" id="lname" name="lname" placeholder="Enter last name..." /><br />
                            <label htmlFor="subject">Subject:</label><br />
                            <input type="text" id="subject" name="subject" placeholder="Enter subject..." /><br />
                            <label htmlFor="message">Message:</label><br />
                            <input type="text" id="message" name="message" placeholder="Enter message..." /><br />
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" name="email" placeholder="Enter email..." /><br />
                            <input onClick={generateEmailFromForm} type="button" value="Submit" />
                        </form> 
                    </div>
                        <div className="tableArea">
                            <table>
                            <thead>
                                <tr>
                                <th>Video namn</th>
                                <th>Pizza</th>
                                <th>Insändare</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Pizza zideo 1</td>
                                <td>Margarita</td>
                                <td>Pål johnson</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                <Footer />
        </>
    );
}