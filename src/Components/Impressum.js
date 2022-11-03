import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import   './impressum.css';


export const Impressum = () => {

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

        <div class= "container-imprint">
         <div class= "imprint-title" ><br></br><h2>Imkereibedarf Profi GmbH </h2></div>
         <div class= "imprint-text">
                Kilianstädter Str. 50<br></br>
                61137 Schöneck<br></br>
                Deutschland<br></br> <br></br>

                Tel.: +49(0)6187 / 207 57 86<br></br>
                E-Mail: info@bienenzucht-profi.de<br></br> <br></br>

                Registergericht: 63450 Hanau<br></br>
                Registernummer: HRB 97516<br></br> <br></br>

                Geschäftsführer: Viktor Dutenhöfner<br></br> <br></br>

                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE309265709<br></br><br></br>

                Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr<br></br><br></br>

                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet, hierzu jedoch grundsätzlich bereit.<br></br><br></br>

                Verantwortliche/r i.S.d. § 55 Abs. 2 RStV:<br></br>
                Viktor Dutenhöfner, Kilianstädter Str. 50, 61137 Schöneck, Deutschland<br></br><br></br>


                Hinweise für Bilder und Grafiken:<br></br><br></br>

                Bilder von eigenen Aufnahmen sowie lizensierte Bilder von Tore Studio Paris und iStock.<br></br><br></br>

                Aufgrund der EU Verordnung weisen wir auf folgenden Link hin:<br></br>

                http://ec.europa.eu/consumers/odr/<br></br><br></br>

                Dies ist eine Schlichtungsstelle für Onlinehändler und Verbraucher. Als Verbraucher erhalten Sie hier die Möglichkeit, sich bei Streitigkeiten mit einem Internethändler an eine Schlichtungsstelle zu wenden.<br></br><br></br>

                Wir sind stets bemüht Lösungen zu schaffen und zufriedene Kunden zu haben. Bitte wenden Sie sich bei Unklarheiten oder wenn Sie unzufrieden sind, gerne zuerst an uns per E-Mail oder Telefon.<br></br><br></br>


                Haftungsausschluss/ Disclaimer<br></br><br></br>

                1. Inhalt des Onlineangebotes<br></br><br></br>

                Der Autor (Bienenzucht-profi.de) übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen. Vorstehende Haftungsbeschränkung gilt nicht für Ansprüche wegen der Verletzung des Lebens, des Körpers oder der Gesundheit oder wenn der Schaden auf Vorsatz oder grober Fahrlässigkeit beruht.<br></br><br></br>

                Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br></br><br></br>

                2. Verweise und Links<br></br><br></br>

                Sofern auf Verweisziele (« Links ») direkt oder indirekt verwiesen wird, die außerhalb des Verantwortungsbereiches des Autors liegen, haftet dieser für dort befindliche Inhalte nicht. Für diese Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.<br></br><br></br>

                3. Urheberrecht<br></br><br></br>

                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken und Texte zu beachten, von ihm selbst erstellte Grafiken und Texte zu nutzen oder auf lizenzfreie Grafiken und Texte zurückzugreifen. Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.<br></br><br></br>

                4. Rechtswirksamkeit dieses Haftungsausschlusses<br></br><br></br>

                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.<br></br><br></br>


                Disclaimer<br></br><br></br>

                Obwohl Wir uns sehr viel Mühe geben und gut recherchieren, müssen wir hier drauf hinweisen, dass alle Angaben bei Bienenzucht-profi.de ohne Gewähr sind. Eine Garantie für die Richtigkeit können wir nicht übernehmen. Die Informationen und Zielverweise stellen keine Aufforderung zum Handeln dar, sondern lediglich eine Hilfestellung bei Ihrer Entscheidung. Alle enthaltenen Meinungen und Informationen dienen ausschließlich der Information und begründen kein Haftungsobligo. Jegliche Haftung für aus der Verwendung dieser Informationen möglicherweise resultierende Vermögensschäden ist darum strikt ausgeschlossen.<br></br><br></br>

                Rechte<br></br><br></br>

                Alle Rechte vorbehalten. Nachdruck (auch auszugsweise), kommerzielle Weiterverbreitung und Aufnahme in kommerzielle Datenbanken nur mit schriftlicher Genehmigung des Autors.<br></br><br></br>


        
        </div>
        </div>
        </div>


        
    )
}