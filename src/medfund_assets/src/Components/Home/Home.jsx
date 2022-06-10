import React from 'react';
import "./Home.css";
import logo from "./../../assets/logo.png";
import homeImg from "./../../assets/home-img.jpg";
import Button from 'react-bootstrap/Button';

class Home extends React.Componenet{
    render(){
        return(
            <div className="home-component">
                <div className="nav-component">
                    <div className="logo">
                        <img
                            src ={logo}
                            alt =""
                        />
                        <div className="title">MedFund</div>
                    </div>
                    <div className="login">
                    <div className="login-text">Create Campaign</div>
                        <div className="login-tex">How it Works</div>                       
                        <div className="login-text">Sign In</div>
                    </div>
                </div>

                <div className="header">
                Do a good deed by giving to those in need. <br/> Be the light in the dark!
                </div>

                <div className="create-campaign">
                    <Button as={Col} variant="primary">How it Works</Button>
                    <Button as={Col} variant="primary">Create Campaign</Button>
                </div>

                <div className="open-campaigns">
                    
                </div>
            </div>
        )
    }
}
export default Home;