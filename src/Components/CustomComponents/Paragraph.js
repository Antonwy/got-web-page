import React from 'react'
import '../../Style/CustomComponents.css'
import posed from 'react-pose';

const ParAnimY = posed.p({
    visible: {
        opacity: 1,
        y: 0,
        delay: ({i}) => ( i * 250) },
    hidden: {opacity: 0, y: -100},
})

const ParAnimX = posed.p({
    visible: {
        opacity: .8,
        scaleX: 1,
        delay: ({i}) => ( i * 250) },
    hidden: {opacity: 0, scaleX: 0},
})

const Paragraph = (props) => {
  return (
      <div>
        {
            props.x ?
                <ParAnimX onClick={props.onClick} i={props.delay} pose={props.isVisible ? 'visible' : 'hidden'} className="underlineParagraph">{props.children}</ParAnimX>
                :
                <ParAnimY onClick={props.onClick} i={props.delay} pose={props.isVisible ? 'visible' : 'hidden'} className="underlineParagraph yAnim">{props.children}</ParAnimY>
        }
      </div>
  )
}

export default Paragraph
