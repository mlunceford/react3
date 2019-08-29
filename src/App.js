import React from 'react';
import './App.css';
import Grandpa from './Component/Grandpa'

function App() {
  return (
    <div className="App">
      <header className="home">Home</header>
      <div className='black'>
        <div className='wrap'>
          <div className='dataBox'> 
          
            <div className='buttons'>
              <button> {'< Previous'} </button>
              <button>{'Next >'}</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
