import React from 'react';
import {withRouter,Link} from 'react-router-dom';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product:''
        }
    }

    
    render() {
        const {name,rating,price,description,stocks,tags} = this.state.product
        return (
            <div>
                <section id="cart-view">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cart-view-area">
                                    <div className="cart-view-table">
                                        <form action="">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                        <tr>
                                                            <td><Link className="remove" to="#">remove</Link></td>
                                                            <td><Link to="#"><img src="/assets/img/man/polo-shirt-3.png" alt="img" /></Link></td>
                                                            <td><Link className="aa-cart-title" to="#">{name}</Link></td>
                                                            <td>${price}</td>
                                                            <td><input className="aa-cart-quantity" type="number" value="1" /></td>
                                                            <td>${price}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="6" className="aa-cart-view-bottom">
                                                                
                                                                <input className="aa-cart-view-btn" type="submit" value="Update Cart" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>

                                        <div className="cart-view-total">
                                            <h4>Cart Totals</h4>
                                            <table className="aa-totals-table">
                                                <tbody>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <td>$450</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <td>$450</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Link to="#" className="aa-cart-view-btn">Proced to Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cart;