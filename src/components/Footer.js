import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return(
        <footer id="aa-footer">
    {/* <!-- footer bottom --> */}
    <div className="aa-footer-top">
     <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="aa-footer-top-area">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <h3>Main Menu</h3>
                  <ul className="aa-footer-nav">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Our Services</Link></li>
                    <li><Link to="#">Our Products</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Knowledge Base</h3>
                    <ul className="aa-footer-nav">
                      <li><Link to="#">Delivery</Link></li>
                      <li><Link to="#">Returns</Link></li>
                      <li><Link to="#">Services</Link></li>
                      <li><Link to="#">Discount</Link></li>
                      <li><Link to="#">Special Offer</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Useful Links</h3>
                    <ul className="aa-footer-nav">
                      <li><Link to="#">Site Map</Link></li>
                      <li><Link to="#">Search</Link></li>
                      <li><Link to="#">Advanced Search</Link></li>
                      <li><Link to="#">Suppliers</Link></li>
                      <li><Link to="#">FAQ</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="aa-footer-widget">
                  <div className="aa-footer-widget">
                    <h3>Contact Us</h3>
                    <address>
                      <p> 25 Astor Pl, NY 10003, USA</p>
                      <p><span className="fa fa-phone"></span>+1 212-982-4589</p>
                      <p><span className="fa fa-envelope"></span>dailyshop@gmail.com</p>
                    </address>
                    <div className="aa-footer-social">
                      <Link to="#"><span className="fa fa-facebook"></span></Link>
                      <Link to="#"><span className="fa fa-twitter"></span></Link>
                      <Link to="#"><span className="fa fa-google-plus"></span></Link>
                      <Link to="#"><span className="fa fa-youtube"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    {/* <!-- footer-bottom --> */}
    <div className="aa-footer-bottom">
      <div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="aa-footer-bottom-area">
            <p>Designed by <Link to="http://www.markups.io/">MarkUps.io</Link></p>
            <div className="aa-footer-payment">
              <span className="fa fa-cc-mastercard"></span>
              <span className="fa fa-cc-visa"></span>
              <span className="fa fa-paypal"></span>
              <span className="fa fa-cc-discover"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </footer>
//   <!-- / footer -->

        )
    }
}
export default Footer;