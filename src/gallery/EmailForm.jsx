import { useState } from 'react'; 

export default function EmailForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    function generateEmailFromForm(){
        const body = `Hej,\n\n${message}\n\nKind Regards \n${firstName} ${lastName}`;
        const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailToLink;
    }
    
    return (
        <form>
            <label htmlFor="fname">Förnamn:</label><br />
            <input type="text" id="fname" name="fname" placeholder="Förnamn..." value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
            <label htmlFor="lname">Efternamn:</label><br />
            <input type="text" id="lname" name="lname" placeholder="Efternamn..." value = {lastName} onChange={(e) => setLastName(e.target.value)}/><br />
            <label htmlFor="subject">Ämne:</label><br />
            <input type="text" id="subject" name="subject" placeholder="Ämne..." value={subject} onChange={(e) => setSubject(e.target.value)}/><br />
            <label htmlFor="message">Meddelande:</label><br />
            <textarea type="text" id="message" name="message" placeholder="Meddelande..." value={message} onChange={(e) => setMessage(e.target.value)}/><br />
            <label htmlFor="email">Epost:</label><br />
            <input type="email" id="email" name="email" placeholder="Epost..." value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input onClick={generateEmailFromForm} type="button" value="Skicka" />
        </form> 
    );
}