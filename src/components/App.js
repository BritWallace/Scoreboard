import React from "react";
import './App.css';


function App(){
  return ( 
    <div className="Scoreboard" >
    <React.Fragment>
      <Header title="My Scoreboard" totalPlayers={1}/>
      <Player />
      <Counter />
    </React.Fragment>
    </div>
  );
}


const Header =(props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
    <span className="player-name">
    Guil
    </span>
    </div>
    
    );
}

  const Counter = () => {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button  className="counter-action increment"> + </button>
      </div>
    );
  }

  

// ReactDOM.render (
//   <Header />,

//   document.getElementById('root')
// );

export default App;