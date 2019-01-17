import React, { Component } from 'react'
import '../../Stlye/CharacterPage.css';
import posed from 'react-pose';
import CharacterHeader from './CharacterHeader';

import Daenerys from '../../Images/daenerys.jpg'
import Jon from '../../Images/jon-snow.jpeg'
import Arya from '../../Images/arya-stark.jpg'
import Tyrion from '../../Images/tyrion-lannister.png'


const Background = posed.img({
    visible: {opacity: 1, scale: 1, transition: {duration: 750}},
    hidden: {opacity: 0, scale: 1.5}
})

export default class CharacterPage extends Component {

    state = {
        isVisible: false,
        character: this.props.location.state.character,
        background: Daenerys,
    }

    componentDidMount(){
        this.setState({isVisible: true, background: this.chooseImage()})
    }

    chooseImage = () => {
        switch (this.state.character) {
            case "Jon Snow":
                return Jon
            case "Arya Stark":
                return Arya
            case "Daenerys Targaryen":
                return Daenerys
            case "Tyrion Lannister":
                return Tyrion
            default:
                return Jon;
        }
    }

  render() {
      const {isVisible, character, background} = this.state;
    return (
      <div>
        <Background pose={isVisible ? 'visible' : 'hidden'} src={background} alt="Background" className="bg" />
        <CharacterHeader character={character}/>
      </div>
    )
  }
}
