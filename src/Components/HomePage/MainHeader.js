import React from 'react'
import LineParagraph from '../LineParagraph';
import posed from 'react-pose';

const Header = posed.h1({
  visible: {opacity: 1, delay: 500, transition: {duration: 1000}},
  hidden: {opacity: 0}
})

const Paragraph = posed.p({
  visible: {opacity: 1, delay: 500, transition: {duration: 1500}},
  hidden: {opacity: 0}
})

const MainHeader = ({isVisible}) => {
  return (
    <div className="mainHeader">
      <LineParagraph isVisible={isVisible} text="Song of Ice and Fire"/>
      <Header pose={isVisible ? 'visible' : 'hidden'}>Game of Thrones</Header>
      <Paragraph pose={isVisible ? 'visible' : 'hidden'}>Fan-Page for all Game of Thrones Character’s and Places.</Paragraph>
    </div>
  )
}

export default MainHeader
