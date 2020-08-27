import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Highlight from "../../components/Highlight/Highlight";
import Signup from "../../components/Signup/Signup";

class Home extends Component {
    render() {
        return (
           <div>
            <Navbar />
            <Highlight
            autoPlay
            loop
             />
             <Signup />
            </div>
           
              
            
        );
    }
}

export default Home;