import React, { Component } from 'react'
import '../../Style/AboutPage.css'
import Background from '../CustomComponents/Background';
import LineParagraph from '../CustomComponents/LineParagraph';
import * as contentful from 'contentful'

export default class AboutPage extends Component {

    client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    state = {
        isVisible: false,
        bg: ""
    }

    componentDidMount(){
        this.client.getEntries({
            'content_type': 'background'
          })
        .then(entries => {
        this.setState({
            isVisible: true,
            bg: entries.items[0].fields.background.fields.file.url
        })
        })
    }
    
  render() {
        const {isVisible, bg} = this.state;
        return (
        <div>
            <Background pose={isVisible ? 'visible' : 'hidden'} style={{backgroundImage: "url(" + bg + ")"}} className="bg" />
            <h1>About</h1>
            <LineParagraph isVisible={isVisible} text="Fan Page of Game of Thrones" />
        </div>
        )
  }
}
