import React, { Component } from 'react';
import './Stlye/HomePage.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage/HomePage';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CharacterPage from './Components/CharacterPage/CharacterPage';


class App extends Component {

  state = {
    isVisible: false
  }

  componentDidMount(){
    this.setState({isVisible: true})
  }

  render() {
    const {isVisible} = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar isVisible={isVisible}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/character" component={CharacterPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
