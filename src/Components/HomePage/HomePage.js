import React, { Component } from 'react'
import backImg from '../../Images/got-dragon.jpg';
import MainHeader from './MainHeader';
import MainBottomPart from './MainBottomPart';
import posed from 'react-pose';
import '../../Style/HomePage.css';

const Background = posed.img({
    visible: {opacity: 1, scale: 1, transition: {duration: 750}},
    hidden: {opacity: 0, scale: 1.5}
})

export default class HomePage extends Component {

    state = {
        isVisible: false
    }

    componentDidMount() {
      this.setState({isVisible: true})
    }

  render() {
    const {isVisible} = this.state;
    return (
      <div>
        <Background pose={isVisible ? 'visible' : 'hidden'} alt="background" src={backImg} className="bg" />
        <MainHeader isVisible={isVisible} />
        <MainBottomPart isVisible={isVisible}/>
      </div>
    )
  }
}
