import React, { Component } from "react";
class Welcome extends React.Component {

     doThisFromClass(){
        alert('Clicked');
     }

    render() {
        return <div>
            <button onClick={this.doThisFromClass}>Click me</button>
                    <h1>Hello world! {this.props.name}</h1>
                </div>
    }
}
export default Welcome;