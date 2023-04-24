import {FaViber, FaFacebookSquare, FaPhoneSquareAlt} from 'react-icons/fa'
const Contact = () => {
    return ( 
        <section className="contact-container">
            <h5>Contact Us</h5>
            <div className="contact-box">
                <div className="contact-item">
                    <FaViber className='viber-icon contact-icon'/>
                    <span>09778007800</span>
                </div>
                <div className="contact-item">
                    <FaPhoneSquareAlt className='phone-icon contact-icon'/>
                    <span>09778007800</span>
                </div>
                <div className="contact-item">
                    <FaFacebookSquare className='facebook-icon contact-icon'/>
                    <span>Facebook</span>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;