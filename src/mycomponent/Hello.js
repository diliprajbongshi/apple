import React from "react";
function Hello(props){
    function DoThis(){
        alert('Button is Clicked');
    }
    return (
         <div>
            <button onClick={DoThis}>Click me</button>
            <h1>Hello I am from functional {props.name} age:{props.age}</h1>
         </div>
    )
}
export default Hello;