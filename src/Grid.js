import React, { Component } from 'react';
import Cell from './Cell'
import './Grid.css'

class Grid extends Component{
    constructor(props){
        super(props)
        this.state={
            gridvalue:this.createGrid(0)
        }
    }
    createGrid(num){
        const arr=[]
        for(let i=0;i<num;i++){
            const temp=[]
            for(let j=0;j<num;j++){
                temp.push(Math.round(Math.random()+0));
            }
            arr.push(temp)
        }
        return arr;
    }
    changeGrid=(e)=>{
        let newrows=e.target.value
        console.log(newrows)
        this.setState({
            gridvalue:this.createGrid(newrows)
        })
    }
    changeState(arr){
        this.setState({
            gridvalue:arr
        })
    }

    findLiveCells=()=>{
        const nrows=this.state.gridvalue.length
        const arr=[];
        for(let i=0;i<nrows;i++){
            const temp=[]
            for(let j=0;j<nrows;j++){
                temp.push(0)
            }
            arr.push(temp)
        }
        for(let i=0;i<nrows;i++){
            for(let j=0;j<nrows;j++){
                let adjacentLiveCells=0
                for(let row=-1;row<=1;row++){
                    for(let col=-1;col<=1;col++){
                        if((i+row)>-1 && (i+row<nrows) && (j+col)>-1 && (j+col)<nrows){
                            if(this.state.gridvalue[i+row][j+col]==1 && !(row==0 && col==0))
                                adjacentLiveCells++;
                            
                        }                      
                    }
                }
                console.log(adjacentLiveCells)

                        if(this.state.gridvalue[i][j]==1){
                            if(adjacentLiveCells<2 || adjacentLiveCells>3)
                                arr[i][j]=0
                            else
                                arr[i][j]=1
                        }
                        else{
                            if(adjacentLiveCells==3)
                                arr[i][j]=1
                            else
                                arr[i][j]=0
                }

                               
            }
        }
        this.changeState(arr);
    }
    render(){
        const nrows=this.state.gridvalue.length
        const grid = []
        let keyVal=0
        for(let i=0;i<nrows;i++){
            const rows=[]
            for(let j=0;j<nrows;j++){
                rows.push(<Cell key={keyVal} data={this.state.gridvalue[i][j]}/>);
                keyVal++;
            }               
            grid.push(<div key={'row'+i} className='Rows'>{rows}</div>)
        }

        return(
            <div className='Grid'> 
                <b>Enter the board size :</b><input type='text' name='numrows' placeholder='Enter the number of rows' onChange={this.changeGrid}/>              
                {grid}
                <br/>
                <button onClick={this.findLiveCells}>Next Generation</button>
            </div>
        )
    }
}

export default Grid