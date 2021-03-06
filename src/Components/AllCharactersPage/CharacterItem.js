import React from 'react'
import posed from 'react-pose'
import Arrow from '../../Images/arrow.svg'
import { withRouter } from 'react-router-dom'

const Text = posed.div({
    middle: {opacity: 1},
    left: {opacity: 0},
    right: {opacity: 0},
})

const Arrows = posed.img({
    middle: {opacity: 1},
    left: {opacity: 0},
    right: {opacity: 0},
})

const Image = posed.div({
  middle: {opacity: 1, width: '22vw', height: '22vw', transition: {duration: 500}},
  left: {opacity: 1, width: '15vw', height: '15vw', transition: {duration: 500}},
  right: {opacity: 1, width: '15vw', height: '15vw', transition: {duration: 500}},
  full: {
    width: '100vw',
    height: '100vh',
    flip: true,
    borderRadius: 0,
    position: 'fixed',
    top: 0,
    zIndex: 20,
  }
})

const Container = posed.div({
  middle: {opacity: 1, left: 'calc(50vw - 200px)', transition: {duration: 500}, scale: 1},
  left: {opacity: 1, left: '-200px', transition: {duration: 500}, scale: 1},
  right: {opacity: 1, left: 'calc(100vw - 200px)', transition: {duration: 500}, scale: 1},
  hidden: {opacity: 0, left: 'calc(50vw - 200px)', scale: 0}
})

class CharacterItem extends React.Component {
  
  state = {
    clicked: false
  }

  imageClick = () => {
    this.setState({clicked: true})
    setTimeout(() => {
      this.props.history.push({
        pathname: '/character/' + this.props.character.name + '/' + false,
      })
    }, 300)
  }

  render() {
    const {character, handleClick, isVisible} = this.props;
    let position = 'middle';
    switch (character.pos) {
      case 0:
      position = 'left'
      break;
      case 1:
      position = 'middle'
      break;
      case 2:
      position = 'right'
      break;
      case 3:
      position = 'hidden'
      break;
      default:
      position = 'middle'
      break;
    }
    const clickable = this.state.clicked && position === 'middle';
    return (
      <Container pose={isVisible ? position : 'hidden'} className="characterItem">
        <div className="characterImgButtons">
          {clickable ? <div></div> : <Arrows alt="arrow" src={Arrow} onClick={handleClick(1)}/>}
          <Image onClick={position === 'middle' ? this.imageClick : ()=>{console.log(position)}} pose={clickable ? 'full' : position} className="characterItemImage" style={{backgroundImage: `url(${character.image})`}}></Image>
          {clickable ? <div></div> : <Arrows className="arrowRotate" alt="arrow" src={Arrow} onClick={handleClick(-1)}/>}
        </div>
        {clickable ? <div></div> : <Text pose={position}>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </Text>}
      </Container>
    )
  }
}

export default withRouter(CharacterItem)
