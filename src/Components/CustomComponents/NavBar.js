import React, { Component } from 'react'
import Logo from "../../Images/got-logo.svg"
import SearchIcon from '../../Images/search-icon.svg'
import Paragraph from './Paragraph';
import posed from 'react-pose';
import { withRouter } from 'react-router-dom'

const LogoAnim = posed.img({
  visible: {opacity: 1, delay: 250, x: 0},
  hidden: {opacity: 0, x: -100}
}) 

const SearchAnim = posed.img({
  visible: {opacity: 1, delay: 250 * 4, x: 0},
  hidden: {opacity: 0, x: 100}
})

class NavBar extends Component {

  handleClick = (to) => () => {    
    this.props.history.push(to)
  }

  render() {
    const {isVisible} = this.props;
    return (
      <div className="navBar">
        <LogoAnim onClick={this.handleClick('/')} pose={isVisible ? 'visible' : 'hidden'} alt="Logo" src={Logo} />
        <div className="navMenu">
            <Paragraph onClick={this.handleClick('allCharacters')} delay={1} isVisible={isVisible}>Characters</Paragraph>
            <Paragraph delay={2} isVisible={isVisible}>Places</Paragraph>
            <Paragraph delay={3} isVisible={isVisible}>About</Paragraph>
            <SearchAnim pose={isVisible ? 'visible' : 'hidden'} alt="Search" src={SearchIcon}/>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);