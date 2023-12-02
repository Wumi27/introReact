import React, { Component } from 'react';
import Lists from './lists';
class List extends Component {
    state = { profiles:[
        {id:1, value:3},
        {id:2, value:5},
        {id:3, value:0}
    ] } 
    render() { 
        this.state.profiles.map((profile)=>console.log(profile))
        return (<>
        {
            this.state.profiles.map((profile)=>
            <Lists profile={profile}
                    Key={profile.id}>
                </Lists>)
        }
        </>);
    }
}
 
export default List;