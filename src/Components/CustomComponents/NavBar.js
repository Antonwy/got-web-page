import React, { Component } from 'react'
import Logo from "../../Images/got-logo.svg"
import MenuIcon from '../../Images/menu-icon.svg'
import CloseIcon from '../../Images/close-icon.svg'
import Paragraph from './Paragraph';
import posed from 'react-pose';
import { withRouter } from 'react-router-dom'
import '../../Style/CustomComponents.css'
import Sound from 'react-sound';
import MusicTheme from '../../Sound/main-theme.mp3'
import MediaQuery from 'react-responsive'

import Play from "../../Images/play.svg"
import Pause from "../../Images/pause.svg"

const LogoAnim = posed.div({
  visible: {opacity: 1, delay: 250, x: 0},
  hidden: {opacity: 0, x: -100}
}) 

const MobileNavMenu = posed.div({
  visible: {height: '100%'},
  hidden: {height: '0%'}
})

class NavBar extends Component {

  state = {
    isPlaying: false,
    showNavMenu: false
  }

  handleClick = (to) => () => {   
    this.props.history.push(to)
  }

  handleNavOpen = () => {
    this.setState({showNavMenu: !this.state.showNavMenu})
  }

  toggleMusic = () => {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  renderNavParagraphs = (x) => {
    const {isVisible} = this.props;
    return(
      <div>
        <Paragraph x={x} onClick={this.handleClick('/allCharacters')} delay={1} isVisible={isVisible}>Characters</Paragraph>
        <Paragraph x={x} onClick={this.handleClick('/place/The Wall')} delay={2} isVisible={isVisible}>Places</Paragraph>
        <Paragraph x={x} onClick={this.handleClick('/about')} delay={3} isVisible={isVisible}>About</Paragraph>
      </div>
    )
  }

  render() {
    const {isVisible} = this.props;
    const {isPlaying, showNavMenu} = this.state;
    return (
      <div className="navBar">
        <Sound>
            url={MusicTheme}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
            loop={true}
        </Sound>
        <LogoAnim pose={isVisible ? 'visible' : 'hidden'} className="playMusic">
          <img onClick={this.handleClick('/')} alt="Logo" src={Logo} />
          <img onClick={this.toggleMusic} className="playPause" width="10px" height="30px" src={isPlaying ? Pause : Play} alt='play' />
          <p>{`${isPlaying ? "Pause" : "Play"}`}</p>
        </LogoAnim>
        <MediaQuery minDeviceWidth={601}>
          <div className="navMenu">
            {this.renderNavParagraphs(false)}
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={601}>
          <div className="mobileNav">
            <img alt="menu" onClick={this.handleNavOpen} src={MenuIcon}></img>
            <MobileNavMenu pose={showNavMenu ? 'visible' : 'hidden'} className="mobileNavMenu">
              <img alt="close" src={CloseIcon} onClick={this.handleNavOpen} />
              <div>
                {this.renderNavParagraphs(true)}
              </div>
            </MobileNavMenu>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default withRouter(NavBar);