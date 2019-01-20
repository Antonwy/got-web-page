import React, { Component } from 'react'
import Background from '../CustomComponents/Background';
import '../../Style/PlacesPage.css'
import PlaceHeader from './PlaceHeader';
import BlockAnim from './BlockAnim';


import TheWall from '../../Images/got-wall.jpg'
import KingsLanding from '../../Images/kings-landing.jpg'
import Braavos from '../../Images/braavos.jpg'
import Winterfell from '../../Images/winterfell.jpg'
import CasterlyRock from '../../Images/casterly-rock.png'
import OldValyria from '../../Images/old-valyria.png'
import Quarth from '../../Images/quarth.jpg'
import Dorne from '../../Images/dorne.png'
import Volantis from '../../Images/volantis.jpg'

const Places = [
  {
    name: 'The Wall',
    img: TheWall,
    color: "rgb(54, 96, 142)"
  },
  {
    name: 'King\'s Landing',
    img: KingsLanding,
    color: "rgb(86, 61, 40)"
  },
  {
    name: 'Braavos',
    img: Braavos,
    color: "rgb(76, 90, 95)"
  },
  {
    name: 'Winterfell',
    img: Winterfell,
    color: "rgb(93, 97, 114)"
  },
  {
    name: 'Casterly Rock',
    img: CasterlyRock,
    color: "rgb(99, 101, 97)"
  },
  {
    name: 'Old Valyria',
    img: OldValyria,
    color: "rgb(55, 63, 63)"
  },
  {
    name: 'Quarth',
    img: Quarth,
    color: "rgb(150, 153, 149)"
  },
  {
    name: 'Dorne',
    img: Dorne,
    color: "rgb(113, 78, 53)"
  },
  {
    name: 'Volantis',
    img: Volantis,
    color: "rgb(188, 176, 169)"
  },
]

export default class PlacePage extends Component {

    state = {
        isVisible: false,
        animateBlock: false,
        place: Places[0],
        currIndex: 0,
        secondIndex: 0
    }

    componentDidMount() {
        this.setState({isVisible: true})
    }

    animateTransition = (dir) => () => {
      const {currIndex} = this.state;
      this.setState({animateBlock: !this.state.animateBlock, secondIndex: currIndex})
      setTimeout(() => {
        if(currIndex === Places.length -1 && dir > 0) {
          this.setState({
            place: Places[0],
            currIndex: 0
          })
        }else if(currIndex === 0 && dir < 0){
          this.setState({
            place: Places[Places.length -1],
            currIndex: Places.length - 1
          })
        }else {
          this.setState({
            place: Places[currIndex + dir],
            currIndex: currIndex + dir
          })
        }
        this.setState({animateBlock: !this.state.animateBlock})
      }, 300)
    }

  render() {
      const {isVisible, animateBlock} = this.state;
      const {place: {name, img}} = this.state;
      console.log(name, img)
      const anim = isVisible ? 'visible' : 'hidden';
    return (
      <div>
        <Background style={{backgroundImage: `url(${img})`}} pose={anim} className="bg placeBg"/>
        <PlaceHeader isVisible={animateBlock} anim={anim} transition={this.animateTransition} name={name} />
        <BlockAnim animateBlock={animateBlock} img={Places[this.state.secondIndex].img} />
      </div>
    )
  }
}
