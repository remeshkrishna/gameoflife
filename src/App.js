import React,{Component} from 'react';
import './App.css';
import Grid from './Grid'

// class App extends Component{
//   constructor()
//   {
//     super()
//     this.state={
//       rows:3
//     }
//   }
//   changeBoard=(e)=>{
//     this.setState((prev)=>({
//       rows:e.target.value
//     }))
//   }
//   render(){
//     console.log(this.state.rows)
//     return(
//     <div className="App">
//       <header className="App-header">
//         GAME OF LIFE
//       </header>
//       <input type='text' name='rows' onChange={this.changeBoard}/>

//       <Grid totalRows={this.state.rows}/>
//     </div>
//     )
//   }
// }
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        GAME OF LIFE
      </header>
      <Grid/>
    </div>
  );
}

export default App;
