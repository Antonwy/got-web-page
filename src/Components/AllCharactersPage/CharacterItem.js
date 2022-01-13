import React from 'react'
import posed from 'react-pose'
import Arrow from '../../Images/arrow.svg'
import { withRouter } from 'react-router-dom'

const Text = posed.div({
  middle: {opacity: 1},
  left: {opacity: 0},
  right: {opacity: 0},
  list: {
    opacity: 1,
    width: 500,
  }
})

const Arrows = posed.img({
  middle: {opacity: 1},
  left: {opacity: 0},
  right: {opacity: 0},
  list: {
    opacity: 0,
    display: "none"
  }
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
  },
  list: {
    width: 100,
    height: 100
  }
})

const Container = posed.div({
  middle: {opacity: 1, left: 'calc(50vw - 200px)', transition: {duration: 500}, scale: 1, marginTop: 0},
  left: {opacity: 1, left: '-200px', transition: {duration: 500}, scale: 1, marginTop: 0},
  right: {opacity: 1, left: 'calc(100vw - 200px)', transition: {duration: 500}, scale: 1, marginTop: 0},
  hidden: {opacity: 0, left: 'calc(50vw - 200px)', scale: 0, marginTop: 0},
  list: {
    left: 'calc(50vw - 200px)',
    flexDirection: "row !important",
    marginTop: (props) => (200 * props.pos),
    opacity: 1,
    scale: 1,
  }
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
        state: { character: this.props.character }
      })
    }, 300)
  }

  render() {
    const {character, handleClick, isVisible, pos, list} = this.props;
    let position = 'middle';
    switch (pos) {
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
    if(pos >= 3) {
      position = 'hidden'
    }
    if(list) {
      position = 'list'
    }

    const clickable = this.state.clicked && position === 'middle';

    return (
      <Container pos={pos} pose={isVisible ? position : 'hidden'} className="characterItem" style={{flexDirection: `${list ? "row" : "column"}`}}>
        <div className="characterImgButtons">
          {clickable ? <div></div> : <Arrows alt="arrow" src={Arrow} onClick={handleClick(1)}/>}
          <Image onClick={position === 'middle' ? this.imageClick : ()=>{}} pose={clickable ? 'full' : position} className="characterItemImage" style={{backgroundImage: `url(http:${character.image.fields.file.url})`}}></Image>
          {clickable ? <div></div> : <Arrows className="arrowRotate" alt="arrow" src={Arrow} onClick={handleClick(-1)}/>}
        </div>
        {clickable ? <div></div> : <Text 
          pose={position}
          style={{display: `${list ? "flex" : "block"}`}}>
          <h2>{character.name}</h2>
          <p style={{}}>{character.description}</p>
        </Text>}
      </Container>
    )
  }
}

export default withRouter(CharacterItem)
