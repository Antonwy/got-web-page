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

const Video = posed.iframe({
    visible: {opacity: 1, delay: 500},
    hidden: {opacity: 0}
})

const CharacterVideo = ({character, showVideo, hideVideo}) => {

    const click = () => {
        hideVideo();
    }

    const getVideo = () => {
        let id = 'uuDu43Gnyts';
        switch (character) {
            case 'Jon Snow':
                id = 'uuDu43Gnyts'
                break;
            case 'Arya Stark':
                id = 'yMAmQhkkn4k'
                break;
            case 'Daenerys Targaryen':
                id = 'wpYL7kO0WmA'
                break;
            case 'Tyrion Lannister':
                id = 'J1TL-EQWtvo'
                break;
            
            default:
                id = 'uuDu43Gnyts'
                break;
        }
        return id;
    }

    const anim = showVideo ? 'visible' : 'hidden';
    return (
        <Background style={{pointerEvents: showVideo ? 'all' : 'none'}} onClick={click} pose={anim} className="videoBack">
            <Container pose={anim} className="characterVideo">
                { showVideo ? <Youtube
                    videoId={getVideo()}
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
