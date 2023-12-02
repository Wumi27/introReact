import React, { Component } from 'react';
class Lists extends Component {
    state = { profile:this.props.profile } 
    render() { 
        console.log(this.state.profile.value)
        return (<>
            <div>
                         <span>{this.state.profile.value}</span>
                         <button >Increment</button>
                         <button >Decrement</button>
                         <button>Delete</button>
                       </div>
           </>);
    }
}
 
export default Lists;