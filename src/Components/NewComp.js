import React, { Component } from 'react';
import bellA from "./BellA.png";
import bellB from "./BellB.png";

class NewComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
          message: "subscribe to my channel",
          sub: "subscribe",
          imageURL: bellB
          
      };
    }

    styles = {
        fontStyle: "italic",
        color: "purple"   
    };

    Buttonchange=()=>{
        this.setState({
            message: "hit the bell icon",
            sub: "subscribed"
            
        });
        };

        imageChange=()=>{
           this.setState({
            imageURL: bellA, 
            message: "thank you" 
           });
        }
  render() { 
    return (
      <div className='App'> 
      <h3 style={this.styles}>{this.state.message}</h3> 
      <button onClick={this.Buttonchange}>{this.state.sub}</button>
      <p/>
      <img style={{width: "30px", height: "30px"}} src={this.state.imageURL} onClick={this.imageChange} alt=" "/>
            </div>
    );
  }
}
 
export default NewComp;