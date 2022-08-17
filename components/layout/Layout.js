import Header from '../header/Header';
import React from 'react';
import Footer from '../footer/Footer';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import Language from '../Language';

import { API,DOMAIN } from '../../config';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='' >

            <Language/>
            <Header />
            </div>
            {children}
     <CookieConsent   style={{cursor:'pointer',textAlign:'center', background: 'linear-gradient(-190deg, #8860d8, #23a6d5, #23d5ab ,darkgreen)',
backgroundSize:' 200% 200%',
    animation:' gradient 25s ease infinite',textTransform:'uppercase',fontSize:'small',padding:' 0'
}}
        buttonText="Разумем и прихватам" 
        buttonStyle={{backgroundColor:'#f8f9fa ',opacity:'100%',color:'#46afa9',borderRasius:'12px',textTransform:'uppercase'}}
        expires={5} >
     Наша веб страница користи колачиће, и коришћењем исте сагласан/на си са тиме. За више информација погледајте  <a   style={{color:'white',fontWeight:'bold',marginLeft:'0.2%',textDecoration:'none'}} href={`${DOMAIN}/ostalo/uslovi-koriscena-i-politika-privatnosti`}>Услове коришћења и Политику Приватности</a>
      </CookieConsent>
 
<Footer/>
        </React.Fragment>
    );
};

export default Layout;
