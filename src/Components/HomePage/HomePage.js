import React, { Component } from 'react'
import MainHeader from './MainHeader';
import MainBottomPart from './MainBottomPart';
import '../../Style/HomePage.css';
import Background from '../CustomComponents/Background'
import * as contentful from 'contentful'


export default class HomePage extends Component {

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })

  state = {
      isVisible: false,
      bg: ""
  }

    componentDidMount() {
      this.client.getEntries({
        'content_type': 'background'
      })
      .then(entries => {
        this.setState({
          isVisible: true,
          bg: entries.items[2].fields.background.fields.file.url
        })
      })
    }

  render() {
    const {isVisible, bg} = this.state;
    return (
      <div>
        <Background pose={isVisible ? 'visible' : 'hidden'} style={{backgroundImage: "url(" + bg + ")"}} className="bg" />
        <MainHeader isVisible={isVisible} />
        <MainBottomPart isVisible={isVisible}/>
      </div>
    )
  }
}
