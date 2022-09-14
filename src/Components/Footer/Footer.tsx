import React from "react";
import './Footer.css';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa'

function Footer() {
    return ( 
        <div >
        <nav className="footer">
           
            <div className="footer-list">
                <ul  >
                    <li><a href="#"> <FaInstagram size={25} /> </a></li>
                    <li><a href="#"><FaWhatsapp size={25} /> </a></li>
                    <li><a href="#"> <FaMapMarkerAlt size={25} /> </a></li>
                </ul>
            </div>
        </nav>
    </div>
     );
}

export default Footer;