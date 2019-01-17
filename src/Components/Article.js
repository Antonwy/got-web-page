import React from 'react'
import '../Stlye/CustomComponents.css'
import posed from 'react-pose'

const Header = posed.h3({
  visible: {opacity: 1, delay: 500, transition: {duration: 1000}},
  hidden: {opacity: 0}
})

const Paragraph = posed.p({
  visible: {opacity: 1, delay: 500, transition: {duration: 750}},
  hidden: {opacity: 0}
})

const Article = ({ header, text, isVisible }) => {
  return (
    <div>
      <Header pose={isVisible ? 'visible' : 'hidden'}>{header}</Header>
      <Paragraph pose={isVisible ? 'visible' : 'hidden'} style={{opacity:".7"}}>{text}</Paragraph>
    </div>
  )
}

export default Article
