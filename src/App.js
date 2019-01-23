import React, { Component } from 'react';
import './Style/HomePage.css';
import NavBar from './Components/CustomComponents/NavBar';
import HomePage from './Components/HomePage/HomePage';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import CharacterPage from './Components/CharacterPage/CharacterPage';
import AllCharactersPage from './Components/AllCharactersPage/AllCharactersPage';
import AboutPage from './Components/AboutPage/AboutPage';
import PlacePage from './Components/PlacePage/PlacePage';



class App extends Component {

  state = {
    isVisible: false,
  }

  componentDidMount(){
    this.setState({isVisible: true})
  }

  render() {
    const {isVisible} = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL + '#/'}>
        <div className="App">
          <NavBar isVisible={isVisible}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/character" component={CharacterPage}/>
          <Route path="/allCharacters" component={AllCharactersPage} />
          <Route path="/place" component={PlacePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
