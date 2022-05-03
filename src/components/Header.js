import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: ''
    }
  }

  onLogout = () => {
    // Implemetation of session is remaining
    // console.log(this.state.isSignIn)
    // fetch('http://localhost:3001/users/logout')
    //   .then(response => response.json())
    //   .then(data => {

    this.props.onRouteChange("signout")
    // })
  }
  render() {
    console.log(this.props.isSignIn, "props data")
    return (
      <header id="aa-header">

        <div className="aa-header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-top-area">
                  <div className="aa-header-top-left">
                    <div className="aa-language">
                      <div className="dropdown">
                        <Link className="btn dropdown-toggle" to="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <img src={"/assets/img/flag/english.jpg"} alt="english flag" />ENGLISH
                      <span className="caret"></span>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><Link to="#"><img src={"/assets/img/flag/french.jpg"} alt="" />FRENCH</Link></li>
                          <li><Link to="#"><img src={"/assets/img/flag/english.jpg"} alt="" />ENGLISH</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="aa-currency">
                      <div className="dropdown">
                        <Link className="btn dropdown-toggle" to="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i className="fa fa-usd"></i>USD
                      <span className="caret"></span>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><Link to="#"><i className="fa fa-euro"></i>EURO</Link></li>
                          <li><Link to="#"><i className="fa fa-jpy"></i>YEN</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cellphone hidden-xs">
                      <p><span className="fa fa-phone"></span>00-62-658-658</p>
                    </div>
                  </div>
                  <div className="aa-header-top-right">
                    <ul className="aa-head-top-nav-right">
                      <li className="hidden-xs"><Link to={"/myaccount"}>myAccount</Link></li>
                      <li className="hidden-xs"><Link to={"/register"}>Register</Link></li>
                      <li className="hidden-xs"><Link to={"/cart"}>My Cart</Link></li>
                      <li className="hidden-xs"><Link to="checkout.html">Checkout</Link></li>

                      {this.props.isSignIn === true
                        ? <li onClick={this.onLogout}><Link to={"/"} >Log Out</Link></li>
                        : <li className="sign"><Link to={"/signin"} >Log In</Link></li>
                      }


                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aa-header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">
                  <div className="aa-logo">
                    <Link to={"/"}>
                      <span className="fa fa-shopping-cart"></span>
                      <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                    </Link>
                  </div>
                  <div className="aa-cartbox">
                    <Link className="aa-cart-link" to="#">
                      <span className="fa fa-shopping-basket"></span>
                      <span className="aa-cart-title">SHOPPING CART</span>
                      <span className="aa-cart-notify">2</span>
                    </Link>
                    <div className="aa-cartbox-summary">
                      <ul>
                        <li>
                          <Link className="aa-cartbox-img" to="#"><img src={"/assets/img/woman-small-2.jpg"} alt="img" /></Link>
                          <div className="aa-cartbox-info">
                            <h4><Link to="#">Product Name</Link></h4>
                            <p>1 x $250</p>
                          </div>
                          <Link className="aa-remove-product" to="#"><span className="fa fa-times"></span></Link>
                        </li>
                        <li>
                          <Link className="aa-cartbox-img" to="#"><img src={"/assets/img/woman-small-1.jpg"} alt="img" /></Link>
                          <div className="aa-cartbox-info">
                            <h4><Link to="#">Product Name</Link></h4>
                            <p>1 x $250</p>
                          </div>
                          <Link className="aa-remove-product" to="#"><span className="fa fa-times"></span></Link>
                        </li>
                        <li>
                          <span className="aa-cartbox-total-title">
                            Total
                      </span>
                          <span className="aa-cartbox-total-price">
                            $500
                      </span>
                        </li>
                      </ul>
                      <Link className="aa-cartbox-checkout aa-primary-btn" to="checkout.html">Checkout</Link>
                    </div>
                  </div>
                  <div className="aa-search-box">
                    <form action="">
                      <input type="text" name="" id="" placeholder="Search here ex. 'man' " />
                      <button type="submit"><span className="fa fa-search"></span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="menu">
          <div className="container">
            <div className="menu-area">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href={"/"}>Home</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>


    )
  }
}
export default withRouter(Header);