import React from 'react';
import Product from './Product';

class ProductList extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
    }
  }


    render(){
        const {productlist} = this.props
    return(
    <div>
        {
            productlist && productlist.map((user,i) =>{
                return(
                    <Product
                    key={i}
                    _id={productlist[i]._id}
                    name={productlist[i].name}
                    rating={productlist[i].rating}
                    price={productlist[i].price}
                    isSignIn={this.props.isSignIn}
                    />
                )
            })
        }
    </div>
    )
    }
}
export default ProductList;