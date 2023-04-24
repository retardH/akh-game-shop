import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wallet from "./components/wallet";
import Message from "./components/message";
import Contact from "./components/contact";
import OTPInput from "./components/otp-input";
import AccForm from "./components/account-form";

function App() {
 
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menuClickHandler = (event) => {
    event.stopPropagation();
    setIsMenuClicked(isClicked => !isClicked);
  };

  const closeModal = () => {
    setIsMenuClicked(false);
  }

  const modalClickHandler = (event) => {
    event.stopPropagation();
  }
  return (
    <Router>
      <div className="wrapper" onClick={closeModal}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  onMenuClick={menuClickHandler}
                  isMenuClicked={isMenuClicked}
                  modalClickHandler={modalClickHandler}
                  closeModal={closeModal}
                />
                <Home />
                <Footer position={'sticky'}/>
              </>
            }
          ></Route>
          <Route path="/wallet" element={<>
            <Wallet/>
            <Footer position={'fixed'}/>
          </>} />
          <Route path="/message" element={<>
            <Message/>
            <Footer position={'fixed'}/>
          </>} />
          <Route path='/contact' element={<>
            <Contact/>
            <Footer position={'fixed'}/>
          </>} />
          <Route path="/account" element={<>
            <Wallet/>
            <Footer position={'fixed'}/>
          </>} />
          <Route path="/otp" element={<OTPInput/>} />
          <Route path="/account/create" element={<AccForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
