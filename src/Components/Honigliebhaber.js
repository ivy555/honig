import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import   './honigliebhaber.css';

import germanyMap from '../images/germany.png'


export const Honigliebhaber = () => {

    return (

        <div className='container'>

        <div class= "top-bar">
            <a class="navigation--link"> <span> <Link to="aboutus">Über uns</Link></span></a>       <span> &nbsp;|&nbsp;</span>
            <a class="navigation--link"> <span> <Link to="aboutbees">Über Bienen</Link></span></a>  <span> &nbsp;|&nbsp;</span>
            <a class="navigation--link"> <span> <Link to="contact">Kontakt</Link></span></a>        <span> &nbsp;|&nbsp;</span>
            <a class="navigation--link"> <span> <Link to="impressum">Impressum</Link></span></a> 
        </div>

        <div class= "header">

            <div class="hfLogo"> </div>
            <div class="top_text">Willkommen bei Honigfinder - Deiner regionalen Honig-Plattform</div>
            <div class="account-menu">
            <a class="navigation--link signupbutton"> <span> <Link to="login">Anmelden<FontAwesomeIcon icon={faUser}> </FontAwesomeIcon></Link></span></a> <span>&nbsp;</span>   
            <a class="navigation--link cartbutton"> <span> <Link to="shoppingcart">Warenkorb<FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon></Link></span></a> 
            </div>   
        </div>

        <div class= "navigation-main">
            <a class="navigation--link" href="honigliebhaber" title="Für Honigliebhaber" aria-label="Für Honigliebhaber" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faHandHoldingHeart}   size="xl"> </FontAwesomeIcon> Für Honigliebhaber</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="unternehmen" title="Für Unternehmen" aria-label="Für Unternehmen" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faUserTie }   size="xl"> </FontAwesomeIcon> Für Unternehmen</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="imker" title="Für Imker" aria-label="Für Imker" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faJar }   size="xl"> </FontAwesomeIcon> Für Imker</span></a>  
        </div>

        <br />

        <div class="container-honigliebhaber">
            <div class="container-left">
            <div class="search-description">
                <div class="search-description-title"> 
                Honigfinder-Suche 
                </div>
                <div class="search-description-text">
                Unterstütze regionale Imker und genieße reinen, heimischen Honig.<br /> Gib deine Adresse ein und finde deinen Lieblingshonig:
                </div>
            </div>
            <input class="form-control type-search" formcontrolname="op" id="type-search" ng-minlength="4" placeholder="53879 Euskirchen" type="search"></input>
            
            <button type="submit" className='searchButton btn btn-success btn-md mybtn'>Suchen</button>

            
            <div class="beekeeper-nearby-text">
                Honig in deiner Nähe:
                </div>
                <div class="beekeeper-nearby">
                {/* <br /> */}
                <div className='beekeeper1 beekeepers'>
                    Roman Mita<br></br>
                    Pelzergasse 22<br></br>
                    53879 Euskirchen <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=53879+Euskirchen+Pelzergasse+22"><u>Google Maps</u></a>
                
                </div>
                <div className='beekeeper2 beekeepers'>
                    Arthur Zieg <br></br>
                    Im Röken 7 <br></br>
                    33719 Bielefeld <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=33719+Bielefeld+Im+Roeken+7"><u>Google Maps</u></a>
                </div>
                <div className='beekeeper3 beekeepers'>
                    Viktor Dutenhöfner<br></br>
                    Kilianstädterstr. 50<br></br>
                    61137 Schöneck <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=61137+Schöneck+Kilianstaedter+Straße+50"><u>Google Maps</u></a>
                </div>
                <div className='beekeeper4 beekeepers'>
                    Max Mustermann<br></br>
                    Musterstraße 1<br></br>
                    10115 Berlin <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=10115+Berlin"><u>Google Maps</u></a>
                </div>
                <div className='beekeeper5 beekeepers'>
                    Max Mustermann 2<br></br>
                    Musterstraße 2<br></br>
                    80331 München <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=53879+Euskirchen"><u>Google Maps</u></a>
                </div>
                <div className='beekeeper6 beekeepers'>
                    Max Mustermann 3<br></br>
                    Musterstraße 3<br></br>
                    30159 Hannover <br></br>
                    <a target="_blank" and rel="noopener noreferrer" href="http://maps.google.com/maps?q=53879+Euskirchen"><u>Google Maps</u></a>
                
                </div>
            </div>

            </div>

            <div class="container-right">
                 {/* <div class="photoGermany"> */}
                 <img className='germanyMap'src={germanyMap}/>
            </div>
        </div>
       
        </div>
        
    )
}