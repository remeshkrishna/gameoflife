import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Cell' style={this.props.data==1?{backgroundColor:"green"}:{backgroundColor:"white"}}>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default Cell