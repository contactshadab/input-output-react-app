import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'shadab'
  }

  usernameHandler = (event) => {
    console.log('usernameHandler was called');
    this.setState({
      username: event.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.usernameHandler} value=""></UserInput>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
  
}

export default App;
