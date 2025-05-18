import profilePicture from '../assets/ade.jpg'
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} alt="Profile" />
                <h3>Ade Husni Muabaroq</h3>
                <p>Programmer - Content Creator - Researcher</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/adehusni2903?igsh=c2d1amo2emY1ZzVp'><FaInstagram /></a>
                    <a href='https://www.tiktok.com/@husnimubaroq555?_t=ZS-8wRyBmUdpSB&_r=1'><FaTiktok /></a>
                    <a href='https://wa.me/qr/7ZQEVOGL7UAGP1'><FaWhatsapp /></a>
                </div>
            </div>
        </header>
    )
}

export default Header