import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            product:''
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/products/product/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(data =>{
            this.setState({product:data})
        })
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render() {
        const {name,rating,price,description,stocks,tags} = this.state.product
        console.log(this.state.product)
        return (
            <main>
                <section id="aa-product-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-product-details-area">
                                    <div className="aa-product-details-content">
                                        <div className="row">
                                            {/* <!-- Modal view slider --> */}
                                            <div className="col-md-5 col-sm-5 col-xs-12">
                                                <div className="aa-product-view-slider">
                                                    <div id="demo-1" className="simpleLens-gallery-container">
                                                        <div className="simpleLens-container">
                                                            <div className="simpleLens-big-image-container"><Link to="" data-lens-image="/assets/img/view-slider/large/polo-shirt-1.png" className="simpleLens-lens-image"><img src="/assets/img/view-slider/medium/polo-shirt-1.png" alt={this.state.image} className="simpleLens-big-image" /></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Modal view content --> */}
                                            <div className="col-md-7 col-sm-7 col-xs-12">
                                                <div className="aa-product-view-content">
                                                <h3>{name}</h3>
                                                    <div className="aa-price-block">
                                                    <span className="aa-product-view-price">${price}</span>
                                                    <p className="aa-product-avilability">Avilability: <span>Only {stocks} In stock</span></p>
                                                    <p className="aa-product-avilability">Product Rating: <span >{rating} </span></p>
                                                    <p className="aa-product-avilability">Category: <span >{tags} </span></p>
                                                    
                                                    </div>
                                                    <p className="dess">{description}</p>
                                                    <h4>Size</h4>
                                                    <div className="aa-prod-view-size">
                                                        <Link to="#">S</Link>
                                                        <Link to="#">M</Link>
                                                        <Link to="#">L</Link>
                                                        <Link to="#">XL</Link>
                                                    </div>
                                                    <h4>Color</h4>
                                                    <div className="aa-color-tag">
                                                        <Link to="#" className="aa-color-green"></Link>
                                                        <Link to="#" className="aa-color-yellow"></Link>
                                                        <Link to="#" className="aa-color-pink"></Link>
                                                        <Link to="#" className="aa-color-black"></Link>
                                                        <Link to="#" className="aa-color-white"></Link>
                                                    </div>
                                                    <div className="aa-prod-view-bottom">
                                                        <Link className="aa-add-to-cart-btn" to="#">Add To Cart</Link>
                                                        <Link className="aa-add-to-cart-btn" to="#">Wishlist</Link>
                                                        <Link className="aa-add-to-cart-btn" to="#">Compare</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aa-product-details-bottom">
                                        <ul className="nav nav-tabs" id="myTab2">
                                            <li><Link to="#description" data-toggle="tab">Description</Link></li>
                                            <li><Link to="#review" data-toggle="tab">Reviews</Link></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade in active" id="description">
                                            <p>{description}</p>
                                            </div>
                                            <div className="tab-pane fade " id="review">
                                                <div className="aa-product-review-area">
                                                    <h4>2 Reviews for T-Shirt</h4>
                                                    <ul className="aa-review-nav">
                                                        <li>
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <Link to="#">
                                                                        <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl" />
                                                                    </Link>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                                                                    <div className="aa-product-rating">
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star-o"></span>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="media">
                                                                <div className="media-left">
                                                                    <Link to="#">
                                                                        <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl" />
                                                                    </Link>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                                                                    <div className="aa-product-rating">
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star-o"></span>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <h4>Add a review</h4>
                                                    {/* <div className="star-outer" id="rating">
                                                    <div className="star-inner">
                                                        <p>Your Rating</p>
                                                        <Link to="#" onClick={this.changeRating}><span className="fa fa-star-o"></span></Link>
                                                        <Link to="#"><span className="fa fa-star-o"></span></Link>
                                                        <Link to="#"><span className="fa fa-star-o"></span></Link>
                                                        <Link to="#"><span className="fa fa-star-o"></span></Link>
                                                    </div>
                                                    </div> */}
                                                    {/* <!-- review form --> */}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
            </main>


        )

    }
}
export default ProductDetails;