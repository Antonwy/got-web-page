import React from 'react'
import posed from 'react-pose'
import Youtube from 'react-youtube'

const Container = posed.div({
    visible: {width: '90%', height: '90%', borderRadius: 0},
    hidden: {width: 0, height: 0, borderRadius: '50%'}
})

const Background = posed.div({
    visible: {opacity: 1},
    hidden: {opacity: 0}
})


const CharacterVideo = ({character, showVideo, hideVideo}) => {

    const click = () => {
        hideVideo();
    }

    const anim = showVideo ? 'visible' : 'hidden';
    return (
        <Background style={{pointerEvents: showVideo ? 'all' : 'none'}} onClick={click} pose={anim} className="videoBack">
            <Container pose={anim} className="characterVideo">
                { showVideo ? <Youtube
                    videoId={character.video}
                    className={`video`}
                    containerClassName={`video`}
                />
                : 
                <div></div>
                }
            </Container>
        </Background>
    )
}

export default CharacterVideo
