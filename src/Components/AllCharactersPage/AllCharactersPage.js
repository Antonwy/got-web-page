import React, { Component } from 'react'
import Background from '../CustomComponents/Background'
import "../../Style/AllCharactersPage.css";
import CharacterCarousel from './CharacterCarousel';
import * as contentful from 'contentful'


export default class AllCharactersPage extends Component {

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })

  state = {
      isVisible: false,
      list: false,
      bg: ""
  }

  componentDidMount() {
    this.client.getEntries({
      'content_type': 'background'
    })
    .then(entries => {
      this.setState({
        isVisible: true,
        bg: entries.items[1].fields.background.fields.file.url
      })
    })

  }

  handleListClick = () => {
    this.setState({list: !this.state.list})
  }

  render() {
    const {isVisible, list, bg} = this.state;
    return (
      <div>
        <Background 
          pose={isVisible ? 'visible' : 'hidden'} 
          className="bg"
          style={{backgroundImage: "url(" + bg + ")"}}>
        </Background>
        <button onClick={this.handleListClick}>List</button>
        <CharacterCarousel list={list} isVisible={isVisible}/>
      </div>
    )
  }
}
