import React, { Component } from 'react'
import '../../Style/AboutPage.css'
import Background from '../CustomComponents/Background';
import LineParagraph from '../CustomComponents/LineParagraph';

export default class AboutPage extends Component {

    state = {
        isVisible: false
    }

    componentDidMount(){
        this.setState({isVisible: true})
    }
    
  render() {
        const {isVisible} = this.state;
        return (
        <div>
            <Background pose={isVisible ? 'visible' : 'hidden'} className="bg aboutBg" />
            <h1>About</h1>
            <LineParagraph isVisible={isVisible} text="Fan Page of Game of Thrones" />
        </div>
        )
  }
}
