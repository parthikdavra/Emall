import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            registerInName: '',
            registerInPassword: '',
            registerInEmail: '',
            error: ''
        }
    }
    onNameChange = (event) => {
        this.setState({ registerInName: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ registerInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ registerInPassword: event.target.value })
    }
    onSubmitButton = () => {
        fetch("http://localhost:3001/users/register", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.registerInName,
                email: this.state.registerInEmail,
                password: this.state.registerInPassword
            })
        })
            .then(respose => respose.json())
            .then(user => {
                if (user._id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                    this.setState({ isSignIn: true });
                    this.props.history.push('/');
                } else {
                    this.setState({ error: user.error })
                    this.props.history.push('/register');
                }
            })
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
                                            <h4>Register</h4>
                                            <div className="aa-login-fieldset">
                                                <label htmlFor="">Email address<span>*</span></label>
                                                <input onChange={this.onNameChange} className="aa-login-form" type="text" placeholder="name" />
                                                <label htmlFor="">Email address<span>*</span></label>
                                                <input onChange={this.onEmailChange} className="aa-login-form" type="text" placeholder="email" />
                                                <label htmlFor="">Password<span>*</span></label>
                                                <input onChange={this.onPasswordChange} className="aa-login-form" type="password" placeholder="Password" />
                                                <button onClick={this.onSubmitButton} type="submit" className="aa-browse-btn">Register</button>
                                                <div className="ma3">
                                                    <ul className="list flex flex-wrap w-100 h-20 dark-red center">
                                                        <li>{this.state.error}</li>
                                                    </ul></div>
                                                <Link to={'/signin'}>
                                                    <button type="submit" className="aa-browse-btn">Signin</button>
                                                </Link>
                                               
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

export default withRouter(Register);