import React from 'react'
import * as contentful from 'contentful'

import CharacterItem from './CharacterItem';


class CharacterCarousel extends React.Component {

    client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    state = {
        characterInfo: undefined
    }

    componentDidMount() {
        this.client.getEntries({
            'content_type': 'gotCharacter'
        })
        .then(entries => {

            let array = [...entries.items];

            array.forEach((item, i) => {
                item.pos = i
            })
            this.setState({
                characterInfo: array
            })
        })
    }

    handleClick = (dir) => () => {
        if(dir > 0) {
            this.leftRotate()
        }else {
            this.rightRotate()
        }
    }

    leftRotate = () => {
        let info = this.state.characterInfo
        let arr = info.slice(0)
        let temp = info[0].pos; 
        let i;
		for (i = 0; i < info.length - 1; i++) 
			arr[i].pos = arr[i + 1].pos; 
        arr[i].pos = temp; 
        this.setState({characterInfo: arr})
    }

    rightRotate = () => {
        let info = this.state.characterInfo;
        let arr = info.slice(0)
        let temp = info[info.length - 1].pos; 
        let i;
		for (i = 1; i < info.length; i++) {
			arr[info.length - i].pos = info[info.length - 1 - i].pos; 
        }
        arr[0].pos = temp;
        this.setState({characterInfo: arr})
    }

    renderItems = () => {
        const obj = [];
        this.state.characterInfo.forEach((item, i) => (
            obj.push(<CharacterItem 
                key={i} 
                handleClick={this.handleClick} 
                isVisible={this.props.isVisible} 
                pos={item.pos} 
                character={item.fields}
                list={this.props.list}
            />)
        ))
        return obj;
    }

    render() {

        if(!this.state.characterInfo) {
            return <h1>Loading...</h1>
        }

        return (
            <div className="carousel">
                {
                    this.renderItems()
                }
            </div>
        )
    }
}

export default CharacterCarousel
