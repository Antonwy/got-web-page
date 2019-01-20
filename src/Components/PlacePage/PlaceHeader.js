import React from 'react'
import Arrow from '../../Images/arrow.svg'
import posed from 'react-pose'

const Container = posed.div({
  visible: {opacity: 1},
  hidden: {opacity: 0}
})

const PlaceHeader = ({transition, name, isVisible}) => {
  return (
    <Container className="placeHeader" pose={isVisible ? 'hidden' : 'visible'}>
      <img src={Arrow} alt='arrow' onClick={transition(1)}/>
      <h1>{name}</h1>
      <img className="rotatetArrow" src={Arrow} alt='arrow' onClick={transition(-1)}/>
    </Container>
  )
}

export default PlaceHeader
