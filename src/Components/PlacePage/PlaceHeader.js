import React from 'react'
import Arrow from '../../Images/arrow.svg'
import posed from 'react-pose'

const Container = posed.h1({
  visible: {opacity: 1},
  hidden: {opacity: 0}
})

const Desc = posed.p({
  visible: {opacity: 1},
  hidden: {opacity: 0}
})

const PlaceHeader = ({transition, name, isVisible, desc}) => {
  return (
    <div>
      <div className="placeHeader">
        <img src={Arrow} alt='arrow' onClick={transition(1)}/>
        <Container pose={isVisible ? 'hidden' : 'visible'}>{name}</Container>
        <img className="rotatetArrow" src={Arrow} alt='arrow' onClick={transition(-1)}/>
      </div>
      <Desc className="placeDescription" pose={isVisible ? 'hidden' : 'visible'}>{desc}</Desc>
    </div>
  )
}

export default PlaceHeader
