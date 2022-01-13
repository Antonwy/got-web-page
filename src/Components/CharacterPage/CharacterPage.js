import React, { Component } from 'react';
import '../../Style/CharacterPage.css';
import CharacterHeader from './CharacterHeader';
import Background from '../CustomComponents/Background';
import CharacterVideo from './CharacterVideo';
import * as contentful from 'contentful';

export default class CharacterPage extends Component {
  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  state = {
    isVisible: false,
    character: undefined,
    background: undefined,
    showVideo: false,
  };

  componentDidMount() {
    this.client
      .getEntries({
        content_type: 'gotCharacter',
        'fields.name': this.props.match.params.name,
      })
      .then((entries) => {
        this.setState({
          isVisible: true,
          background: entries.items[0].fields.image.fields.file.url,
          character: entries.items[0].fields,
        });
      });
  }

  handleVideoClick = (character) => () => {
    this.setState({ showVideo: true });
  };

  hideVideo = () => {
    this.setState({ showVideo: false });
  };

  checkTransition = () => {
    const { isVisible } = this.state;
    const transition =
      this.props.match.params.transition === 'false' ? false : true;
    if (isVisible && transition) {
      return 'visible';
    } else if (!transition) {
      return 'normal';
    } else if (!isVisible && transition) {
      return 'hidden';
    }
  };

  render() {
    const { character, background, showVideo } = this.state;

    if (!character) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <Background
          pose={this.checkTransition()}
          style={{ backgroundImage: `url(${background})` }}
          className="bg"
        />
        <CharacterHeader
          handleClick={this.handleVideoClick}
          character={character}
        />
        <CharacterVideo
          character={character}
          hideVideo={this.hideVideo}
          showVideo={showVideo}
        />
      </div>
    );
  }
}
