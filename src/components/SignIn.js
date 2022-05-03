import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            error:'',
            redirect:''
            
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }
    onSubmitButton = () => {
        fetch("http://localhost:3001/users/signin",
        {
            method:'post',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user =>{
                console.log(user);
                if(user._id){
                    console.log(user._id)
                    this.props.loadUser(user);
                    // this.setState({isSignedIn:true})
                    this.props.onRouteChange("home");
                    this.props.history.push('/');
                    
                }else{
                    this.props.onRouteChange("signin");
                    // this.setState({isSignedIn:false})
                    this.setState({error:user.error})
                    this.props.history.push('/signin');
                }
            })
       
        // this.props.onRouteChange('home');
    }

    render() {
    
        return (
            <section id="aa-myaccount">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                 <div className="aa-myaccount-area">         
                     <div className="row">
                       <div className="col-md-6">
                         <div className="aa-myaccount-login">
                         <h4>Login</h4>
                          <div className="aa-login-fieldset">
                           <label htmlFor="">Email address<span>*</span></label>
                            <input onChange={this.onEmailChange} className="aa-login-form" type="text" placeholder="email"/>
                            <label htmlFor="">Password<span>*</span></label>
                            <input onChange={this.onPasswordChange} className="aa-login-form" type="password" placeholder="Password"/>
                            
                            <button onClick={this.onSubmitButton} type="submit" className="aa-browse-btn">Login</button>
                            <div className="ma3">
                            <ul className="list flex flex-wrap w-100 h-20 dark-red center">
                            <li>{this.state.error}</li>
                            </ul></div>
                            <Link to={'/register'}>
                            <button type="submit" className="aa-browse-btn">Register</button> 
                            </Link>
                            {/* <a href="#0" classNameName="f6 link dim black db">for got your password?</a> */}
                            
                           </div>
                         </div>
                       </div>
                    </div>          
                </div>
            </div>
        </div>
    </div>
    </section>
                   
            
        )
    }

}
export default withRouter(SignIn)