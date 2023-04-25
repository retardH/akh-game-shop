import logoImg from './../assets/navbar-logo.jpg'
import {FaHome} from 'react-icons/fa'
import {DiAndroid} from 'react-icons/di'
import {MdLanguage} from 'react-icons/md'
const Sidebar = ({modalClickHandler}) => {
    return ( 
        <div className="side-bar" onClick={modalClickHandler}>
            <img src={logoImg} alt="" />
            
                <div className='side-bar__item'>
                    <FaHome className='side-bar__icon'/>
                    <h2>Home</h2>
                </div>
                <div className='side-bar__item'>
                    <DiAndroid className='side-bar__icon'/>
                    <h2>App Guide</h2>
                </div>
                <div className='side-bar__item'>
                    <MdLanguage className='side-bar__icon'/>
                    <h2>Languages</h2>
                </div>
        </div>
     );
}
 
export default Sidebar;