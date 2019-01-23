import React, { Component } from 'react'
import Logo from "../../Images/got-logo.svg"
import SearchIcon from '../../Images/search-icon.svg'
import Paragraph from './Paragraph';
import posed from 'react-pose';
import { withRouter } from 'react-router-dom'
import '../../Style/CustomComponents.css'
import Sound from 'react-sound';
import MusicTheme from '../../Sound/main-theme.mp3'

import Play from "../../Images/play.svg"
import Pause from "../../Images/pause.svg"

const LogoAnim = posed.div({
  visible: {opacity: 1, delay: 250, x: 0},
  hidden: {opacity: 0, x: -100}
}) 

const SearchAnim = posed.img({
  visible: {opacity: 1, delay: 250 * 4, x: 0},
  hidden: {opacity: 0, x: 100}
})

class NavBar extends Component {

  state = {
    isPlaying: false,
  }

  handleClick = (to) => () => {   
    this.props.history.push(to)
  }

  toggleMusic = () => {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  render() {
    const {isVisible} = this.props;
    const {isPlaying} = this.state;
    return (
      <div className="navBar">
        <Sound
            url={MusicTheme}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
            loop={true}
        />
        <LogoAnim pose={isVisible ? 'visible' : 'hidden'} className="playMusic">
          <img onClick={this.handleClick('/')} alt="Logo" src={Logo} />
          <img onClick={this.toggleMusic} className="playPause" width="10px" height="30px" src={isPlaying ? Pause : Play} alt='play' />
          <p>{`${isPlaying ? "Pause" : "Play"} Music`}</p>
        </LogoAnim>
        <div className="navMenu">
            <Paragraph onClick={this.handleClick('/allCharacters')} delay={1} isVisible={isVisible}>Characters</Paragraph>
            <Paragraph onClick={this.handleClick('/place/The Wall')} delay={2} isVisible={isVisible}>Places</Paragraph>
            <Paragraph onClick={this.handleClick('/about')} delay={3} isVisible={isVisible}>About</Paragraph>
            <SearchAnim pose={isVisible ? 'visible' : 'hidden'} alt="Search" src={SearchIcon}/>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);