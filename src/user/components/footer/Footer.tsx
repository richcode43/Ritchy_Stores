import "./Footer.css"
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo2.png'
import Mastercard from '../../../assets/images/paymentPartners/mastercard.svg';
import Paypal from '../../../assets/images/paymentPartners/paypal.svg';
import Visa from '../../../assets/images/paymentPartners/visa.svg';
import GooglePlayImg from '../../../assets/images/googleplay-btn.svg'
import AppstoreImg from '../../../assets/images/appstore-btn.svg'
import * as Icon from "react-bootstrap-icons";
const footer = () => {
  return (
    <>
        <div className="footerSection">
            <div className="siteInfo">
                <div className="siteTitle">
                   <Link to="/">
                        <img src={Logo} alt="" style={{width:"100px",height:"60px",marginLeft:"-14px"}}/>
                   </Link>
                   <span>Ritchy Stores</span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente eius quo tempore at? Magnam maiores fuga velit consequatur quibusdam?</p>
                </div>
                <div className="site-detail">

                    <div className="siteLinks">
                        <h5>Categories</h5>
                        <div className="category-links">
                            <Link to="">About Us</Link>
                            <Link to="">Contact Us</Link>
                            <Link to="">Shop</Link>
                            <Link to="">FAQ</Link>
                        </div>
                    </div>
                    <div className="useful links">
                        <h5>Useful Links</h5>
                        <Link to="">My Account</Link>
                        <Link to="">Login / Register</Link>
                        <Link to="">Orders</Link>
                        <Link to="">Track Products</Link>
                        <Link to="">Wishlist</Link>
                        <Link to="">Cart</Link>
                    </div>
                    <div className="Help Center">
                        <h5>Help Center</h5>
                        <Link to="">Your Orders</Link>
                        <Link to="">Your Account</Link>
                        <Link to="">Track Order</Link>
                        <Link to="">FAQ</Link>
                    </div>
                    <div className="legal">
                        <h5>Legal</h5>
                        <Link to="">Privacy Policy</Link>
                        <Link to="">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <div className="payments">
                <div className="payment-partners">
                        <ul>
                            <li>payment partners</li>
                            <li><img src={Mastercard} alt="" /></li>
                            <li><img src={Paypal} alt="" /></li>
                            <li><img src={Visa} alt="" /></li>
                        </ul>
                </div>
                <div className="mobileApps">
                    <ul>
                        <li>Download our app</li>
                        <li><img src={AppstoreImg} alt="" width="130px" /></li>
                        <li><img src={GooglePlayImg} alt="" width="130px" /></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">Copyright 2021 RitchyStores. All rights reserved.</div>
                <div className="socialHandles">
                    <ul>
                        <li>Follow us on</li>
                        <li><Icon.Facebook className="btn-social"/></li>
                        <li><Icon.X className="btn-social"/></li>
                        <li><Icon.Instagram className="btn-social"/></li>
                    </ul>
                </div>
            </div>

        </div>
    </>
  )
}

export default footer