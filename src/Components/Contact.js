import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import   './contact.css';


export const Contact = () => {

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
        
        <div class="container-contact">

            <div class="contact-title"><br></br><h2>Kontaktformular</h2></div> 
            <div class="contact-inputs"> 
            <form id="support" name="support" class="" method="post" action="https://honigfinder.de/forms/index/id/5"> 
   
            <div class="field--select select-field"> 
            <select class="input-gender is--required required" required="required" aria-required="true" id="anrede" name="anrede"> <option selected="selected" disabled="disabled" value="">Anrede*</option><option>Frau</option><option>Herr</option></select>
                </div>

            <div>
                <input type="text" class="input-firstname is--required required" required="required" aria-required="true" value="" id="vorname" placeholder="Vorname*" name="vorname"/> 
                </div>

            <div> <input type="text" class="input-firstname is--required required" required="required" aria-required="true" value="" id="nachname" placeholder="Nachname*" name="nachname"/>
                </div> 

             <div> 
                <input type="email" class="input-mail is--required required" required="required" aria-required="true" value="" id="email" placeholder="E-Mail-Adresse*" name="email"/> 
                </div>

             <div> 
                <input type="text" class="input-telefon " value="" id="telefon" placeholder="Telefon" name="telefon"/> 
                </div> 

             <div> 
                <input type="text" class="input-title is--required required" required="required" aria-required="true" value="" id="betreff" placeholder="Betreff*" name="betreff"/> 
                </div> 

             <div class="textarea">
                <textarea class="input-text is--required required" required="required" aria-required="true" id="kommentar" placeholder="Kommentar*" name="kommentar"></textarea> 
                </div> 

            <div class="forms--required">Die mit einem * markierten Felder sind Pflichtfelder.</div>
                <p class="privacy-information block-group"> Ich habe die <a title="Datenschutzbestimmungen" href="/datenschutz" target="_blank">Datenschutzbestimmungen</a> zur Kenntnis genommen. </p>
                <div class="buttons"> <button class="btn-send2 is--primary is--icon-right" type="submit" name="Submit" value="submit">Senden<i class="icon--arrow-right"></i></button> 
                </div> 
            </form> 
                </div> 
                </div> 
                </div> 
        




        
    )
}