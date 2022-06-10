import React from 'react';
import Home from "./../Home/Home";
import Footer from "./../Footer/Footer";
import './App.css';

class App extends React.Component {
    
    render() {
        return (
            <div className="app-component">
                <Home/>
                <Footer/>
            </div>
        )
    }
}
export default App;