import React from 'react'
import posed from 'react-pose'

const Container = posed.div({
    visible: {staggerChildren: 0},
    hidden: {staggerChildren: 100}
})

const Block = posed.div({
    visible: { height: '100%', y: '100%', transition: {duration: 0, }},
    hidden: { height: '0%', y: '0%', transition: {duration: 500, ease: 'easeOut'}}
});

const SecAnim = ({animateBlock, color}) => {

    const showBlocks = () => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<Block style={{backgroundColor: color}} className="secAnimBlock" key={i} />)
        }
        return arr;
    }

    const anim = animateBlock ? 'visible' : 'hidden';

    return (
        <Container className='blockContainer' pose={anim}>
            {
                showBlocks()
            }
        </Container>
    )
}

export default SecAnim
