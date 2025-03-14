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
            <label htmlFor="fname">Name:</label><br />
            <input type="text" id="fname" name="fname" placeholder="Enter first name..." value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" placeholder="Enter last name..." value = {lastName} onChange={(e) => setLastName(e.target.value)}/><br />
            <label htmlFor="subject">Subject:</label><br />
            <input type="text" id="subject" name="subject" placeholder="Enter subject..." value={subject} onChange={(e) => setSubject(e.target.value)}/><br />
            <label htmlFor="message">Message:</label><br />
            <textarea type="text" id="message" name="message" placeholder="Enter message..." value={message} onChange={(e) => setMessage(e.target.value)}/><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input onClick={generateEmailFromForm} type="button" value="Submit" />
        </form> 
    );
}