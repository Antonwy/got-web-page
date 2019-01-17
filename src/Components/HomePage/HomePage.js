import React, { Component } from 'react'
import MainHeader from './MainHeader';
import MainBottomPart from './MainBottomPart';
import '../../Style/HomePage.css';
import Background from '../CustomComponents/Background'

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
        <Background pose={isVisible ? 'visible' : 'hidden'} className="bg" />
        <MainHeader isVisible={isVisible} />
        <MainBottomPart isVisible={isVisible}/>
      </div>
    )
  }
}
