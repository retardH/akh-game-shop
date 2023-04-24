import {FaPhoneSquareAlt} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'
const AccFormInput = ({isMailOTP}) => {
    return ( 
        <div className='acc-input-container'>
            {
                isMailOTP ?
                <HiMailOpen className='acc-input-icon' /> :
                <FaPhoneSquareAlt className='acc-input-icon'/>
            }
            {
                isMailOTP ?
                <input type="text" placeholder='Plase enter your email..'/> :
                <input type="text" placeholder='Plase enter your phone number..'/>
            }
            <div className='otp-btn'>
                <span>GetOTP</span>
            </div>
        </div>
     );
}
 
export default AccFormInput;