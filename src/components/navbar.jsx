import logoImg from "./../assets/navbar-logo.jpg";
import bannerImg from "./../assets/banner-img.jpg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "./sidebar";
const Navbar = ({
  onMenuClick,
  isMenuClicked,
  modalClickHandler,
  closeModal,
}) => {
  return (
    <>
      <nav className="nav-container">
        <div className="top-nav">
          <FiMenu className="menu-logo" onClick={onMenuClick} />
          <h2>AKH Gameshop</h2>
          <img src={logoImg} alt="" />
        </div>
        <div className="banner-img-container">
          <img src={bannerImg} alt="" />
        </div>
        <h4 className="banner-text">
          AKH GAME SHOP တွင်ဝယ်ယူရရှိနိုင်သော ဂိမ်းအမျိုးအစားများ
        </h4>
      </nav>
      {isMenuClicked && <Sidebar modalClickHandler={modalClickHandler} />}
    </>
  );
};

export default Navbar;
