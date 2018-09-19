// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
    constructor(props){
    super(props);
    // Define the initial state here
        this.state = {
            hasBeenClicked: false
        }
    }
    // update the state here
    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }
    // append the elements on the page
    render(){
    return (
        <div> 
            <p> 
                I have {this.state.hasBeenClicked ? null : 'not'} been clicked 
            </p>
            <button onClick = {this.handleClick}> 
                Click me!
            </button>
        </div>
    );
 }
}

export default ClickityClick