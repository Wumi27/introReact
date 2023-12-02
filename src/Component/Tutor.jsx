import React, { Component } from 'react';
class Counter extends Component {
    state = { number: 0 } 
    handleIncrement = ()=>{
        let {number} = this.state
        this.setState({number:number+= 1})
        // console.log(number)
    }
    handleDecrement = ()=>{
        let {number} = this.state
        this.setState({number:number-= 1})
    }
    render() { 
        console.log(this.state.number)
        return (<>
                    <div>
                      <span>{this.state.number}</span>
                      <button onClick={this.handleIncrement}>Increment</button>
                      <button onClick={this.handleDecrement}>Decrement</button>
                      <button>Delete</button>
                    </div>
           
                </>

        );
    }
}
 
export default Counter;