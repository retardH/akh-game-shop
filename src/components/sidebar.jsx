import logoImg from './../assets/navbar-logo.jpg'
import {FaHome} from 'react-icons/fa'
import {DiAndroid} from 'react-icons/di'
import {MdLanguage} from 'react-icons/md'
import { Link } from 'react-router-dom'
import LanguageModal from './language-modal'
import { useState } from 'react'
const Sidebar = ({modalClickHandler}) => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const closeLanguageModalBox = () => {
        setIsLanguageOpen(false);
    }
    return ( 
        <>
        <div className="side-bar" onClick={modalClickHandler}>
            <img src={logoImg} alt="" />
            
                <div className='side-bar__item'>
                    <FaHome className='side-bar__icon'/>
                    <h2>
                        <Link to="/">
                            Home
                        </Link>
                    </h2>
                </div>
                <div className='side-bar__item'>
                    <DiAndroid className='side-bar__icon'/>
                    <h2>App Guide</h2>
                </div>
                <div className='side-bar__item'>
                    <MdLanguage className='side-bar__icon'/>
                    <h2 onClick={() => setIsLanguageOpen(true)}>Languages</h2>
                </div>
        </div>
        {isLanguageOpen && <LanguageModal closeLanguageModalBox={closeLanguageModalBox}/>}
        </>
     );
}
 
export default Sidebar;