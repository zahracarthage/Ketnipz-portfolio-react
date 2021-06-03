import React from 'react'
import ContactItem from '../Components/ContactItem'; 
import phone from '../img/call.svg';
import email from '../img/mail.svg';
import phonelocation from '../img/location.svg';
import Title from '../Components/Title';


export default function ContactPage() {
    return (
    <div>
        <div className="title">
            <Title title={'Contact Kett'} span={'Mi Contact'} />

        </div>

 <div className="ContactPage">
    <div className="map-sect"> 
        <iframe title="googlemapsframe"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51721.15477868295!2d10.189093596321857!3d36.84558119387166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cad2e1d7f1bb%3A0x902488d100b5819b!2sTunis-Carthage%20International%20Airport!5e0!3m2!1sen!2stn!4v1622716175642!5m2!1sen!2stn" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
        <div className="contact-sect">
         {/*   <h1>Contact mi here</h1> */}
            <ContactItem icon={phone} text1={'+216 25698544'} text2={'+216 8954 5482 23'} title={'Phone'}/>
            <ContactItem icon={email} text1={'ketnipz_port@gmail.com'} text2={'plsdontemailket@gmail.com'} title={'Email'}/>
            <ContactItem icon={phonelocation} text1={'Streets'} text2={'Any street will do'} title={'Location'}/>

        </div>
    
        </div>
        </div>
    )
}
