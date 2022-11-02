import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faJar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/fontawesome-free-solid';
import   './login.css';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
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
            <a class="navigation--link signupbutton"> <span> <Link to="login">Anmelden<FontAwesomeIcon icon={faUser}> </FontAwesomeIcon></Link></span></a> <span>&nbsp;</span>   
            <a class="navigation--link cartbutton" > <span> <Link to="shoppingcart">Warenkorb<FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon></Link></span></a> 
            </div>   
        </div>

        <div class= "navigation-main">
            <a class="navigation--link" href="honigliebhaber" title="Für Honigliebhaber" aria-label="Für Honigliebhaber" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faHandHoldingHeart}   size="xl"> </FontAwesomeIcon> Für Honigliebhaber</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="unternehmen" title="Für Unternehmen" aria-label="Für Unternehmen" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faUserTie }   size="xl"> </FontAwesomeIcon> Für Unternehmen</span></a> <span> &nbsp;</span>
            <a class="navigation--link" href="imker" title="Für Imker" aria-label="Für Imker" itemprop="url"><span itemprop="name"><FontAwesomeIcon icon={ faJar }   size="xl"> </FontAwesomeIcon> Für Imker</span></a>  
           
        </div>

        <div class="container-center">

        <div class="background">
        </div>
 
        <div class= "content-right">
        <br />
            <div class= "account">
            <a class="navigation--link"> <span> <Link to="login">Login</Link></span></a>  <span>&nbsp;</span>   
            <a class="navigation--link"> <span> <Link to="signup">Registrieren</Link></span></a> 
            </div>
            <br />
                <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='loginbutton btn btn-success btn-md mybtn'>LOGIN</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Don't have an account? <br /> Register
            <div class= "register-button">   <Link to="signup">Here</Link> </div>
            </span>
      
      

        {/* <button class="btn login-btn" type="submit">Login text</button> */}

        <p>Passwort vergessen?</p>
        
        {/* <button class="flex--item ws-nowrap s-btn s-btn__icon s-btn__google ta-center js-major-provider sm:d-none" data-provider="google" data-oauthserver="https://accounts.google.com/o/oauth2/auth" data-oauthversion="2.0" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;Question Hero&quot;,null,null]">
                    <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" fill="#EA4335"></path></svg>
                    Sign up with Google
                </button>

                <button class="flex--item ws-nowrap s-btn s-btn__icon s-btn__facebook ta-center js-major-provider sm:d-none" data-provider="facebook" data-oauthserver="https://www.facebook.com/v2.0/dialog/oauth" data-oauthversion="2.0" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Facebook&quot;,&quot;Question Hero&quot;,null,null]">
                    <svg aria-hidden="true" class="svg-icon iconFacebook" width="18" height="18" viewBox="0 0 18 18"><path d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z" fill="#4167B2"></path></svg>
                    Sign up with Facebook
                </button> */}

        <button class="btns login-google"   type="submit"> <FontAwesomeIcon icon={ faGoogle }   size="xl"> </FontAwesomeIcon> Mit Google Fortfahren </button>
        <button class="btns login-facebook" type="submit"> <FontAwesomeIcon icon={ faFacebook } size="xl"> </FontAwesomeIcon> Mit Facebook Fortfahren</button>
        <button class="btns login-apple"    type="submit"> <FontAwesomeIcon icon={ faApple }    size="xl"> </FontAwesomeIcon> Mit Apple Fortfahren</button> 
        </div>
        </div>



    </div>


    )
}
