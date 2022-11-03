import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import   './roman.css';

//pictures
import picture1 from '../images/sellers/roman1.jpg'
import picture2 from '../images/sellers/roman2.jpg'
import picture3 from '../images/sellers/roman3.jpg'
import picture4 from '../images/sellers/roman4.jpg'
import sellerIcon from '../images/Beekeeper_Black.png'
import sellerLocation from '../images/Beehive_Black.png'


export const Roman = () => {

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

        <div class="container-center">

        <div class="container-pictures">
        <div class="photos">
            <img className='picture1'src={picture1}/>
            <img className='picture2'src={picture2}/>
            <img className='picture3'src={picture3}/>
            <img className='picture4'src={picture4}/>
        </div>
        </div>

        <div class= "seller-description">
        <br />
        <div class= "account">
            <div class="seller_icon"> <img src={sellerIcon}/></div>  <br />
            <div class="seller_label"> <span> Imkerprofil</span></div>  <br />   
            <div class="seller_name"> <span> Roman</span></div> 
        </div>
        <br /><br />
        


        <div class= "description">
            "Meine Großeltern hatten einen kleinen Imkerbetrieb und als Kund durfte Ich
            immer den Honig abfüllen, ich weiß noch, wie viel Freude mir das immer bereitet hat.
            Die imkerliche Arbeit erfüllt mich nach wie vor mit Stolz, Glück und Verbundenheit
            mit der Natur. Unser Waldhonig ist ein Stück Familientradition - Ein teil des Gewinns
            wird jedes Jahr dem WWF gespendet zur Erhaltung vom Aussterben bedrohter Tiere."   
        </div>  

        <br />

        <div class= "seller-location">
            <img src={sellerLocation}/> 53881 Euskirchen, Deutschland
        </div>  
        
        <br />
   
        <button type="submit" className='sendMessage btn btn-success btn-md mybtn'>NACHRICHT SENDEN</button>
        
        <br /><br />
        
        <div class= "description-bottom">
            Verkauf und Versand durch Honigfinder.de 
        </div>
        </div>
        </div>

    </div>

    )
}
