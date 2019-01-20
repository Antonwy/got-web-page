import React, { Component } from 'react'
import posed from 'react-pose'

const Container = posed.div({
    visible: {staggerChildren: 100},
    hidden: {staggerChildren: 100}
})

const Block = posed.div({
    visible: { height: '100%', backgroundColor: ({color}) =>  color },
    hidden: { height: '0%', backgroundColor: ({prevColor}) =>  prevColor }
});

let prevColor = "rgb(54, 96, 142)"

export default class BlockAnim extends Component {

    showBlocks = () => {
        let color = this.props.color;
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<Block className={i % 2 > 0 ? 'start' : 'end'} prevColor={prevColor} color={color} key={i} />)
        }
        prevColor = color;
        return arr;
    }

    render() {
        const {animateBlock} = this.props;
        const anim = animateBlock ? 'visible' : 'hidden';
        console.log(anim)
        return (
        <Container className='blockContainer' pose={anim}>
            {
                this.showBlocks()
            }
        </Container>
        )
    }
}
