import React from 'react'
import Arrow from '../../Images/arrow.svg'
import posed from 'react-pose'

const Container = posed.h1({
  visible: {opacity: 1},
  hidden: {opacity: 0}
})

const PlaceHeader = ({transition, name, isVisible}) => {
  return (
    <div className="placeHeader">
      <img src={Arrow} alt='arrow' onClick={transition(1)}/>
      <Container pose={isVisible ? 'hidden' : 'visible'}>{name}</Container>
      <img className="rotatetArrow" src={Arrow} alt='arrow' onClick={transition(-1)}/>
    </div>
  )
}

export default PlaceHeader
