import React, {Component} from 'react';
import './App.css';
import Display from './Component/Display'
import Navigation from './Component/Navigation'
import data from './Component/data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1
    }
    // this.previous = this.previous.bind(this)
  }
  previous = () =>{
    this.setState({ id: this.state.id - 1 })
  }
  next = () =>{
    this.setState({ id: this.state.id + 1 })
  }
  render(){
    return(
      <div className = "App" >
        <header className="home">Home</header>
        <div className='black'>
          <div className='wrap'>
            <div className='dataBox'>
              <Display user={data.find((user, i, arr)=> {
                return user.id === this.state.id
              })}/>
              <Navigation previous={this.previous} next={this.next}/>

            
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
