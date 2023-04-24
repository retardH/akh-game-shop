import { useState } from "react";
import AccFormInput from "./account-form-input";
import OTPInput from "./otp-input";

const AccForm = () => {
    const [isMailOTP, setIsMailOTP] = useState(false);
    return ( 
        <form className="acc-form">
            <AccFormInput isMailOTP={isMailOTP}/>
            <span className="form-text">
                {isMailOTP ? "Please check your mail account?" : "Plase check your phone message?"}
            </span>
            <div className="password-input-container otp-input">
                <OTPInput/>
            </div>
            <button className="submit-btn">
                Submit
            </button>
            <a href="#" onClick={() => setIsMailOTP(isMail => !isMail)}>{isMailOTP ? "Open phone use only" : "Open mail use only"}</a>
        </form>
    );
}
 
export default AccForm;