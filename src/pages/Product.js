import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class Product extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {
          error:''
      }
    }
    ondetails=()=>{
        this.props.history.push(`/details/${this.props._id}`)
        
    }
    onAddCart=()=>{
        if(this.props.isSignIn===true){
          
            fetch('http://localhost:3001/users/addcart',{
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id:this.props._id
                }),
              
            })
            .then(response=>response.json())
            .then(data =>{
                console.log(data)
                
            })
        }
    }
  
      render(){
        const {name,rating,price,_id} = this.props
        console.log(this.props.isSignIn)
        return (
            <div className="tab-content">
                <div className="tab-pane fade in active" id="men">
                    <ul className="aa-product-catg">
                        <li>
                            <figure  data-id={_id}>
                                <Link onClick={this.ondetails.bind(this, _id)} className="aa-product-img" to="#"><img src={"/assets/img/man/polo-shirt-2.png"} alt="polo shirt img" /></Link>
                                <Link onClick={this.onAddCart.bind(this,_id)} className="aa-add-card-btn" to="#"><span className="fa fa-shopping-cart"></span>Add To Cart</Link>
                                <figcaption>
                                    <h4 className="aa-product-title"><Link to="#">{name}</Link></h4>
                                    <span className="aa-product-price">{price}$</span><span className="aa-product-price"></span>
                                </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                            <h4 data-toggle="tooltip" data-placement="top" title={rating}><span className="glyphicon glyphicon-star" ></span></h4>
                            </div>
                            <span className="aa-badge aa-sale" to="#">SALE!</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    
        }}
export default withRouter(Product);