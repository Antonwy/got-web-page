import React from 'react'
import '../Stlye/CustomComponents.css'
import posed from 'react-pose';

const container = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Libre Baskerville, serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '20px'
}

const lineStyle = {
    width: '75px',
    height: '5px',
    backgroundColor: '#F45757',
    marginRight: '10px',
    borderRadius: '2px'
}

const Line = posed.div({
  visible: {width: "75px", transition: { duration: 500, delay: 250 }},
  hidden: {width: 0}
})

const Text = posed.p({
  visible: {opacity: 1, transition: {duration: 500, delay: 1000}},
  hidden: {opacity: 0}
})

const pStyle = {
  margin: '0'
}

const LineParagraph = ({text, isVisible}) => {
  return (
    <div style={container}>
      <Line pose={isVisible ? 'visible' : 'hidden'} style={lineStyle}></Line>
      <Text pose={isVisible ? 'visible' : 'hidden'} style={pStyle}>{text}</Text>
    </div>
  )
}

export default LineParagraph