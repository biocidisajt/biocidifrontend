import Header from '../header/HeaderEn';
import React from 'react';
import Footer from '../footer/FooterEn';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import Language from '../Language';
import { DOMAIN } from '../../config';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Language/>
            <Header />
            {children}
            <CookieConsent   style={{cursor:'pointer',textAlign:'center', background: 'linear-gradient(-190deg, #8860d8, #23a6d5, #23d5ab ,darkgreen)',
backgroundSize:' 200% 200%',
    animation:' gradient 25s ease infinite',textTransform:'uppercase',fontSize:'small',padding:'1% 0'
}}
        buttonText="Razumem i prihvatam" 
       buttonStyle={{backgroundColor:'#f8f9fa ',opacity:'100%',color:'#46afa9',borderRasius:'12px',textTransform:'uppercase'}}
        expires={5} >
    We use cookies to improve your experience on our site. For more information read our <a   style={{color:'white',fontWeight:'bold',marginLeft:'0.2%',textDecoration:'none'}} href={`${DOMAIN}/en/ostalo/uslovi-koriscena-i-politika-privatnosti`}>Terms of Use and Privacy Policy .</a>
      </CookieConsent>

<Footer/>
        </React.Fragment>
    );
};

export default Layout;
 