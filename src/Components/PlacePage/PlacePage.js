import React, { Component } from 'react'
import Background from '../CustomComponents/Background';
import '../../Style/PlacesPage.css'
import PlaceHeader from './PlaceHeader';
import BlockAnim from './BlockAnim';

import * as contentful from 'contentful'

import SecAnim from './SecAnim';



// const Places = [
//   {
//     name: 'The Wall',
//     img: TheWall,
//     color: "rgb(54, 96, 142)"
//   },
//   {
//     name: 'King\'s Landing',
//     img: KingsLanding,
//     color: "rgb(86, 61, 40)"
//   },
//   {
//     name: 'Braavos',
//     img: Braavos,
//     color: "rgb(76, 90, 95)"
//   },
//   {
//     name: 'Winterfell',
//     img: Winterfell,
//     color: "rgb(93, 97, 114)"
//   },
//   {
//     name: 'Casterly Rock',
//     img: CasterlyRock,
//     color: "rgb(99, 101, 97)"
//   },
//   {
//     name: 'Old Valyria',
//     img: OldValyria,
//     color: "rgb(55, 63, 63)"
//   },
//   {
//     name: 'Quarth',
//     img: Quarth,
//     color: "rgb(150, 153, 149)"
//   },
//   {
//     name: 'Dorne',
//     img: Dorne,
//     color: "rgb(113, 78, 53)"
//   },
//   {
//     name: 'Volantis',
//     img: Volantis,
//     color: "rgb(188, 176, 169)"
//   },
// ]


export default class PlacePage extends Component {

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      animateBlock: false,
      place: undefined,
      currIndex: undefined,
      secondIndex: undefined,
      places: []
    }
  }

  getPlace = () => {
    const {places} = this.state;
    let placeIndex = places.findIndex(obj => {
      return obj.fields.name === this.props.match.params.name
    })
    return places[placeIndex]
  }  

  getIndex = () => {
    const {places} = this.state;
    return places.findIndex(obj => {
      return obj.fields.name === this.props.match.params.name
    })
  }

  componentDidMount() {
    this.client.getEntries({
      'content_type': 'gotPlace'
    })
      .then(entries => {
        this.setState({
          places: entries.items,
        }, () => {
          this.setState({
            place: this.getPlace(),
            currIndex: this.getIndex(),
            secondIndex: this.getIndex()
          })
        })
      })
    
    this.setState({isVisible: true})
  }

  animateTransition = (dir) => () => {
    const {currIndex, places} = this.state;
    this.setState({animateBlock: !this.state.animateBlock, secondIndex: currIndex})
    setTimeout(() => {
      if(currIndex === places.length -1 && dir > 0) {
        this.setState({
          place: places[0],
          currIndex: 0
        })
      }else if(currIndex === 0 && dir < 0){
        this.setState({
          place: places[places.length -1],
          currIndex: places.length - 1
        })
      }else {
        this.setState({
          place: places[currIndex + dir],
          currIndex: currIndex + dir
        })
      }
      this.setState({animateBlock: !this.state.animateBlock})
    }, 300)
  }

  render() {
    if(!this.state.place) {
      return <h1>Loading...</h1>
    }

    const {isVisible, animateBlock, secondIndex, place, places} = this.state;
    const name = place.fields.name;
    const img = "http:" + place.fields.image.fields.file.url;
    const anim = isVisible ? 'visible' : 'hidden';
    return (
      <div>
        <Background style={{backgroundImage: `url(${img})`}} pose={anim} className="bg placeBg"/>
        <PlaceHeader isVisible={animateBlock} anim={anim} transition={this.animateTransition} name={name} desc={place.fields.description} />
        <BlockAnim animateBlock={animateBlock} img={"http:" + places[secondIndex].fields.image.fields.file.url} />
        <SecAnim animateBlock={animateBlock} color={places[secondIndex].fields.color} />
      </div>
    )
  }
}
