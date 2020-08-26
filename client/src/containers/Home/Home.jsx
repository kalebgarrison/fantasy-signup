import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Highlight from "../../components/Highlight/Highlight"

class Home extends Component {
    render() {
        return (
           <div>
            <Navbar />
            <Highlight
            autoPlay
            loop
             />
            </div>
           
              
            
        );
    }
}

export default Home;