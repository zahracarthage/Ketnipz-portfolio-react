import React from 'react'
import ContactItem from '../Components/ContactItem'; 
import phone from '../img/call.png';
import email from '../img/mail.png';
import phonelocation from '../img/map.png';


export default function ContactPage() {
    return (
 <div className="ContactPage">
    <div className="map-sect">
        <div className="contact-sect">
            <h1>hee</h1>
            <ContactItem icon={phone} text1={'+216 25698544'} text2={'+216 8954 5482 23'} title={'Phone'}/>
            <ContactItem icon={email} text1={'+216 25698544'} text2={'+216 8954 5482 23'} title={'Phone'}/>
            <ContactItem icon={phonelocation} text1={'+216 25698544'} text2={'+216 8954 5482 23'} title={'Phone'}/>

        </div>
    
    </div>            
        </div>
    )
}
