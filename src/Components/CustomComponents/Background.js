import posed from 'react-pose'

const Background = posed.div({
    visible: {opacity: 1, scale: 1, transition: {duration: 750}},
    hidden: {opacity: 0, scale: 1.5},
})

export default Background