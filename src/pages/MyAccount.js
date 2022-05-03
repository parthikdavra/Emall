import React from 'react';
// import { Link } from 'react-router-dom';
// import { render } from '@testing-library/react';
import './MyAccount.css';
class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: ''
        }
    }
    onSignIn = () => {
        this.setState({ isSignIn: this.props.isSignIn })
    }

    onClickUserInfo(){
        if(this.props.isSignIn===true){
        fetch(`http://localhost:3001/users/myaccount/${this.props.userInfo._id}`,
        {
            method:'get',
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(user => {
            console.log("acoounttt")
        })}
        else{
            console.log("sign in first")
        }
    }

    render() {
        console.log(this.props.isSignIn)
        return (

            <div className="card">
                {this.props.isSignIn === true
                    ?
                    <div>
                        <img src={"/assets/img/electronics/electronic-4.png"} alt="John" />
                        <h1>Name:{`${this.props.userInfo.name}`}</h1>
                        <p className="title">Owner of this Account</p>
                        <p>Email:{`${this.props.userInfo.email}`}</p>
                        {/* <a "#"><i className="fa fa-dribbble"></i></a> */}
                        {/* <a href="#"><i className="fa fa-twitter"></i></a> */}
                        {/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
                        {/* <a href="#"><i className="fa fa-facebook"></i></a> */}
                        <p><button>Contact</button></p>
                    </div>
                    :
                    this.props.history.push("/signin")
                }
            </div>

        )
    }
}
export default MyAccount
