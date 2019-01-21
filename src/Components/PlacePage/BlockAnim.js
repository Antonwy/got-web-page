import React, { Component } from 'react'
import posed from 'react-pose'

const Container = posed.div({
    visible: {staggerChildren: 0},
    hidden: {staggerChildren: 150}
})

const Block = posed.div({
    visible: { height: '100%', transition: {duration: 0}},
    hidden: { height: '0%', transition: {duration: 750, ease: 'easeOut'}}
});


export default class BlockAnim extends Component {

    showBlocks = () => {
        const arr = [];
        for (let i = 0; i < 6; i++) {
            arr.push(<Block className="imgContainer" key={i}><div style={{backgroundImage: `url(${this.props.img})`}}></div></Block>)
        }
        return arr;
    }

    render() {
        const {animateBlock} = this.props;
        const anim = animateBlock ? 'visible' : 'hidden';
        return (
        <Container className='blockContainer' pose={anim}>
            {
                this.showBlocks()
            }
        </Container>
        )
    }
}
