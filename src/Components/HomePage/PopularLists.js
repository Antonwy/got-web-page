import React from 'react'
import Paragraph from '../CustomComponents/Paragraph';
import posed from 'react-pose';
import { withRouter } from 'react-router-dom'

const characters = [
    "Jon Snow",
    "Arya Stark",
    "Daenerys Targaryen",
    "Tyrion Lannister"
]

const places = [
    "The Wall",
    "Dorne",
    "Braavos",
    "Volantis"
]

const Header = posed.h3({
    visible: {opacity: 1, delay: ({i}) => (i*250)},
    hidden: {opacity: 0}
})

const PopularLists = withRouter(({isVisible, history}) => {

    const handleCharacterClick = (name) => {
        history.push({
            pathname: '/character/' + name + '/' + true
        })
    }

    const handlePlaceClick = (name) => {
        history.push({
            pathname: '/place/' + name
        })
    }

  return (
    <div className="popularList">
        <div>
            <Header i={1} pose={isVisible ? 'visible' : 'hidden'}>Popular Characters:</Header>
            {
                characters.map((item, i) => {
                    return <Paragraph key={i} onClick={() => (handleCharacterClick(item))} x={true} delay={i + 2} isVisible={isVisible}>{item}</Paragraph>
                })
            }
        </div>
        <div>
            <Header i={6} pose={isVisible ? 'visible' : 'hidden'}>Popular Places:</Header>
            {
                places.map((item, i) => {
                    return <Paragraph key={i} onClick={() => handlePlaceClick(item)} x={true} delay={i + 7} isVisible={isVisible}>{item}</Paragraph>
                })
            }
        </div>
    </div>
  )
})

export default PopularLists
