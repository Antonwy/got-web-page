import React, { Component } from 'react'
import Background from '../CustomComponents/Background'
import "../../Style/AllCharactersPage.css";
import CharacterCarousel from './CharacterCarousel';

export default class AllCharactersPage extends Component {

    state = {
        isVisible: false,
    }

    componentDidMount() {
        this.setState({isVisible: true})
    }

  render() {
      const {isVisible} = this.state;
    return (
      <div>
        <Background pose={isVisible ? 'visible' : 'hidden'} className="bg allCharactersBg"></Background>
        <CharacterCarousel isVisible={isVisible}/>
      </div>
    )
  }
}
