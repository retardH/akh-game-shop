import logoImg from "./../assets/navbar-logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import OTPInput from "./otp-input";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <section className="wallet-container">
      <img src={logoImg} alt="" />
      <div className="email-input-container">
        <FaUserAlt className="input-icon" />
        <input
          type="text"
          placeholder="Please enter your email or phone number"
        />
      </div>
      <div className="password-input-container otp-input">
        <OTPInput />
      </div>
      <button className="login-btn">Login Account</button>
        <Link to="/account/create" className="forget-psw-btn">
      <span href="#" className="forget-psw-btn">
        
            forget password login?
      </span>

        </Link>
      <div className="line"></div>
      <button className="create-btn">
        <Link to="/account/create">Create account</Link>
      </button>
    </section>
  );
};

export default Wallet;
