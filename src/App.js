import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './homepage';

function App() {
 
  const [name,setname]=React.useState("");
  const [seehomepage,setseehomepage]=React.useState(false);
  const movetohomepage=()=>{
    setseehomepage(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!seehomepage?
        <div className='updaterecordcontainer'>
          <label className='inputlabel'>Enter Your Name</label>
          <input type="text"value={name}onChange={(e)=>{setname(e.target.value)}}></input>
          <button className='updatestatsbutton' onClick={()=>{movetohomepage()}}>confirm name</button>
          </div>
          :
        <Homepage name={name}></Homepage>
        }
      </header>
    </div>
  );
}

export default App;
