import React, { Component } from 'react';
import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Home from './pages/Home';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import Header from './components/Header';
import Footer from './components/Footer';

import { Route, Switch} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
// import { BrowserRouter as Router } from 'react-router-dom';


const initialState = {
  route: 'signin',
  isSignIn: false,
  user: {
    _id: '',
    name: '',
    email: '',
    productlist:[]
  }
 
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({
      user: {
        _id: data._id,
        name: data.name,
        email: data.email
      }
    })
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:3001/products/all');
    const data = await response.json();
    this.setState({productlist:data})
          
}


  onRouteChange =(route)=>{
    if(route === "home"){
      this.setState({isSignIn:true})
    }else if(route === "signin")
    {this.setState({isSignIn:false})}
    else if(route === "signout")
    {this.setState({isSignIn:false})}
    this.setState({route:route})
  }

  render() {
    console.log(this.state.isSignIn,"app state")
    let userInfo ={
      _id:this.state.user._id,
      name:this.state.user.name,
      email:this.state.user.email
      
     }

    return (
      <div>
        <Header isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange}/>
        <Switch>
          <Route path='/' exact render={props => (<Home {...props} isSignIn={this.state.isSignIn} productlist={this.state.productlist}  loadUser={this.loadUser} />)}/>
          <Route path='/signin' exact render={props => (<SignIn {...props} isSignIn={this.state.isSignIn} onRouteChange={this.onRouteChange} loadUser={this.loadUser} />)} />
          <Route path='/register' exact render={props => (<Register {...props} isSignIn={this.state.isSignIn} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)} />
          <Route path='/myaccount' exact render={props => (<MyAccount {...props} userInfo={userInfo} isSignIn={this.state.isSignIn}/>)}/>
          <Route path='/details/:id' exact render={props => (<ProductDetails {...props} />)}/>
          <Route path='/cart/:id' exact render={props => (<Cart {...props} isSignIn={this.state.isSignIn}/>)}/>
        </Switch>
        <Footer />
      </div>  

    );
  }
}
export default App;
