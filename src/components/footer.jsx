import { BiWallet } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = ({ position }) => {
  const positionStyle = {
    position: position,
  };
  return (
    <section className="footer" style={positionStyle}>
      <Link to="/">
        <div className="footer-item">
          <FaHome className="footer-icon" />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/wallet">
        <div className="footer-item">
          <BiWallet className="footer-icon" />
          <span>Wallet</span>
        </div>
      </Link>
      <Link to="/message">
        <div className="footer-item">
          <RiMessage2Line className="footer-icon" />
          <span>Message</span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="footer-item">
            <BsFillTelephoneFill className="footer-icon" />
            <span>Contact us</span>
        </div>
      </Link>
      <Link to="/account">
        <div className="footer-item">
            <FaUserAlt className="footer-icon" />
            <span>Account</span>
        </div>
      </Link>
    </section>
  );
};

export default Footer;
