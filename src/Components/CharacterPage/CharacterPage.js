import React, { Component } from 'react'
import '../../Style/CharacterPage.css';
import CharacterHeader from './CharacterHeader';
import Background from '../CustomComponents/Background'

import Daenerys from '../../Images/daenerys.jpg'
import Jon from '../../Images/jon-snow.jpeg'
import Arya from '../../Images/arya-stark.jpg'
import Tyrion from '../../Images/tyrion-lannister.png'



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

    checkTransition = () => {
        const {isVisible} = this.state;
        const transition = this.props.location.state.withTransition;
        if (isVisible && transition) {
            return 'visible';
        }else if(!transition){
            return 'normal'
        }else if(!isVisible && transition){
            return 'hidden'
        }
    }

  render() {
      const {isVisible, character, background} = this.state;
    return (
      <div>
        <Background pose={this.checkTransition()} style={{backgroundImage: `url(${background})`}} className="bg" />
        <CharacterHeader character={character}/>
      </div>
    )
  }
}
