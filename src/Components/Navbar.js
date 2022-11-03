import React, { useContext } from 'react'
import logo from '../images/honigfinder_logo.jpg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import  './navbar.css';

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

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
                {!user && <div className='rightside'>
                    <span><Link to="login" className='navlink signupbutton'>Anmelden<FontAwesomeIcon icon={faUser}> </FontAwesomeIcon></Link></span>
                    <span><Link to="shoppingcart" className='navlink cartbutton'>Warenkorb<FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon></Link></span>
                </div>}
                {user && <div className='rightside'>
                    <span><Link to="/" className='navlink'>{user}</Link></span>
                    <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                    <span className='no-of-products'>{totalQty}</span>
                    <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                </div>}   
            </div>
            </div>   
            <div class= "navigation-main">
            <a class="navigation--link" href="honigliebhaber" title="Für Honigliebhaber" aria-label="Für Honigliebhaber" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faHandHoldingHeart}   size="xl"> </FontAwesomeIcon> Für Honigliebhaber</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="unternehmen" title="Für Unternehmen" aria-label="Für Unternehmen" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faUserTie }   size="xl"> </FontAwesomeIcon> Für Unternehmen</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="imker" title="Für Imker" aria-label="Für Imker" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faJar }   size="xl"> </FontAwesomeIcon> Für Imker</span></a>  

        </div>

        {/* <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>

        </div> */}
        </div>
    )
}
