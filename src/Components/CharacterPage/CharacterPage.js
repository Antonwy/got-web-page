import React, { Component } from 'react'
import '../../Style/CharacterPage.css';
import CharacterHeader from './CharacterHeader';
import Background from '../CustomComponents/Background'

import Daenerys from '../../Images/daenerys.jpg'
import Jon from '../../Images/jon-snow.jpeg'
import Arya from '../../Images/arya-stark.jpg'
import Tyrion from '../../Images/tyrion-lannister.png'
import CharacterVideo from './CharacterVideo';



export default class CharacterPage extends Component {

    state = {
        isVisible: false,
        character: this.props.location.state.character,
        background: Daenerys,
        showVideo: false
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

    handleVideoClick = (character) => () => {
        console.log('CLICK')
        this.setState({showVideo: true})
    }

    hideVideo = () => {
        console.log('CLICK')
        this.setState({showVideo: false})
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
      const {isVisible, character, background, showVideo} = this.state;
    return (
      <div>
        <Background pose={this.checkTransition()} style={{backgroundImage: `url(${background})`}} className="bg" />
        <CharacterHeader handleClick={this.handleVideoClick} character={character}/>
        <CharacterVideo character={character} hideVideo={this.hideVideo} showVideo={showVideo}/>
      </div>
    )
  }
}
